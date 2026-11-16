// Gera a máscara da pessoa numa foto com o Vision do macOS. Roda só no computador,
// sem enviar a foto a nenhum serviço.
//
// Uso: swift ferramentas/retrato/mascara.swift <foto.jpg> <pasta-de-saida>
// Saída: mascara.raw (8 bits por pixel, um canal, do tamanho da foto) e medidas.json
import CoreImage
import CoreVideo
import Foundation
import Vision

let args = CommandLine.arguments
guard args.count >= 3 else {
  FileHandle.standardError.write("uso: swift mascara.swift <foto> <pasta>\n".data(using: .utf8)!)
  exit(2)
}

let input = URL(fileURLWithPath: args[1])
let outDir = URL(fileURLWithPath: args[2], isDirectory: true)
try FileManager.default.createDirectory(at: outDir, withIntermediateDirectories: true)

guard let image = CIImage(contentsOf: input) else {
  FileHandle.standardError.write("não abriu a foto\n".data(using: .utf8)!)
  exit(1)
}
let width = Int(image.extent.width)
let height = Int(image.extent.height)
let context = CIContext(options: [.workingColorSpace: NSNull(), .outputColorSpace: NSNull()])

// Segmentação de pessoa na qualidade máxima: é a que melhor separa os fios de cabelo.
let request = VNGeneratePersonSegmentationRequest()
request.qualityLevel = .accurate
request.outputPixelFormat = kCVPixelFormatType_OneComponent8
try VNImageRequestHandler(ciImage: image, options: [:]).perform([request])

guard let buffer = request.results?.first?.pixelBuffer else {
  FileHandle.standardError.write("nenhuma pessoa encontrada na foto\n".data(using: .utf8)!)
  exit(1)
}

// A máscara sai menor que a foto: amplia para o tamanho original antes de gravar.
let mask = CIImage(cvPixelBuffer: buffer)
let scaled = mask.transformed(by: CGAffineTransform(
  scaleX: CGFloat(width) / mask.extent.width,
  y: CGFloat(height) / mask.extent.height
))
var bytes = [UInt8](repeating: 0, count: width * height)
context.render(
  scaled,
  toBitmap: &bytes,
  rowBytes: width,
  bounds: CGRect(x: 0, y: 0, width: width, height: height),
  format: .L8,
  colorSpace: nil
)
try Data(bytes).write(to: outDir.appendingPathComponent("mascara.raw"))
let info = ["largura": width, "altura": height]
try JSONSerialization.data(withJSONObject: info).write(to: outDir.appendingPathComponent("medidas.json"))
print("máscara gravada: \(width) x \(height)")
