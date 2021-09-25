const getBlogs = () =>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3/all");
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
        const blogs = xhr.response;
        console.log(blogs);
        //Task Day 9 (Q.a)
        const country = blogs.filter((country1) => {
            if(country1.region == "Asia"){
                return country1 ;
            }
        });
        const countryNames = country.map((cName) => cName.name.common);
        console.log(countryNames);
        //Task Day 9 (Q.c)
        const name1 = blogs.forEach((counName) => {
            console.log(counName.name.common);
        });
        const flag = blogs.forEach((counFlag) => {
            console.log(counFlag.flag);
        });
        const capital = blogs.forEach((counCap) => {
            console.log(counCap.capital);
        });
        //Task Day 9 (Q.d)
        const currency = blogs.filter((usCurr) => usCurr.currencies).filter((usCurr) => usCurr.currencies.USD);
        console.log(currency);
    }
}
getBlogs();