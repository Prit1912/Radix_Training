export default {
    
    makeFirstLetterUpperCase(str){
        str = str[0].toUpperCase()+str.slice(1)
        return str
    },

    convertIntoUpperCase(str){
        str = str.toUpperCase()
        return str
    }

}