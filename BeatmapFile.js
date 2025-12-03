function isFileValid(allowed_format, file_chosen) {

    console.log(allowed_format)
    console.log(file_chosen)

    if (file_chosen.includes(allowed_format) == true) {
        console.log('file is valid; is .osu format')
        getBeatmapInfo()
    }
    
    else {  
        alert('please input a beatmap file (.osu)')
    }
    
    return file_chosen
}

function getBeatmapInfo() {
    new File()
}


