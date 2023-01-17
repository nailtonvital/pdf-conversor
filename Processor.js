class Processor{
    static Process(data){
        var a = data.split("\r\n")
        var rows =[]

        a.forEach(row => {
            let items = row.split(';')
            rows.push(items)
        });

        return rows
    }
}

module.exports = Processor