const Reader = require('./Reader')
const Writer = require("./Writer");
const Processor = require('./Processor')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PDFWriter = require("./PDFWriter");
var reader = new Reader()

async function main(){
    var data = await reader.Read('./data.csv')
    var pData = Processor.Process(data)

    var users = new Table(pData)
 
    var html = await HtmlParser.Parse(users)

    new Writer().Write(Date.now()+".html", html)
    PDFWriter.WritePdf(Date.now() + ".pdf",html);
}

main()