
 export const MY_API_KEY="AIzaSyDncJ9sVEYn2l-dCqQJ1evxyYoj38U1TRc";
//export const MY_API_KEY="AIzaSyAn-2cH5ISdqYUx0smy_2gP7e6CWFrHm9A";



//export const MY_API_KEY="AIzaSyDJBaQ2rwc2BVB7qst9ZOq8en4Tkca94BU";
 //export const MY_API_KEY="AIzaSyDOdPYlZvqL4Va8kFsRCTZYL4ewMUQzCrA";
 //export const MY_API_KEY="AIzaSyBD2d7tb5kQCuXYyPXE3049oZ0aiqr4Hws";
 // export const MY_API_KEY="AIzaSyArnnLGA0YQJKJXjiJsv5RhQMoPyXoKcUE";
 //export const MY_API_KEY="AIzaSyA3oBuUyn8nKJGB4hKFS0zO52xlv2TXMnU";
 //export const MY_API_KEY="AIzaSyBzIKrj9PVv0ULeKVX3n7-CuxKydNTE0xc";
 //export const MY_API_KEY="AIzaSyCXTR8i4IFoeuzN_hlSK1y-XslncdbV5Sw";


 


 // const YOUTUBE_API_KEY= "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=20&key=" + MY_API_KEY;


 //https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=4Y4YSpF6d6w&key=

 export const YOUTUBE_SEARCH_API="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

 //const rapidAbhiKey='cd44c2d346msh480a529fe5c1066p199857jsn3677a6571cc3';
 

 
 export const data=async ()=>{
    //const url = 'https://youtube342.p.rapidapi.com/search?part=snippet&maxResults=50&regionCode=IN&q=newsongs';
    const url="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&q=newsongs&key=" + MY_API_KEY;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //      UTKARSH 'X-RapidAPI-Key':'b61ccaf20emshfcd0fd48044ba6ap13f228jsnd7517d4dd8fb' ,
    //         'X-RapidAPI-Host': 'youtube342.p.rapidapi.com'
    //     }
    // };
    
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
 
export const viewsConterter=(data)=>{
if(data>1000000){
    return Math.floor(data/1000000) + "M";
}
else if (data>1000){
    return Math.floor(data/1000) + "K";
}
else{
    return data;
}

}

export  const YOUTUBE_SEARCH_RESULT_API=`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&regionCode=IN&key=${MY_API_KEY}&q=`;
