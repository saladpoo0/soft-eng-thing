class Beatmap {
    constructor(file_chosen) {
        this.file_chosen = file_chosen
    }

    isFileValid() {
        const valid_format = '.osu'
        console.log(valid_format)
        console.log(this.file_chosen)

        if (toString(this.file_chosen).includes(valid_format) == true) {
            console.log('file is valid: is .osu format')
            return this.file_chosen;

            async function getBeatmapInfo() {
                const fs = new FileSystemFileHandle.apply()
                console.log(fs)
            }
        }
        
        else {  
            alert('please input a beatmap file (.osu)')
        }
    }
};

const btn = document.getElementById('button');