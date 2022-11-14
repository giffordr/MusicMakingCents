
const {EnumChangefreq} = require('sitemap');

let sitemap = sm.createSitemap({
    hostname: "https://musicmakingcents.com",
    cacheTime: 10 * Milliseconds.Minute
});
Promise.all(window.articleModels.articleListModel()).then((posts) => {
    
    posts.forEach((post, i) => {
        
            sitemap.add({
                url: `https://musicmakingcents.com/${post.header}/${post.subheader}/${post.title}`,
                changefreq: EnumChangefreq.WEEKLY,
                lastmod: post.updatedAt
            });
        
   
    fs.writeFileSync("./sitemap.xml", sitemap.toString());
});
});