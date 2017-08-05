var express = require('express');
var scrapeIt = require('scrape-it');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/scrapin',function(req,res,next){
  // Ngodingnya disini
  scrapeIt("https://tentangkoding.blogspot.co.id", {
      listDataArtikel:{
        listItem:".post-outer-container",
        data:{
          judul:".post-title.entry-title",
          penulis:".g-profile span",
          tanggal:".published",
          ringkasan:".snippet-item.r-snippetized",
          gambar:{
            selector:".snippet-thumbnail img",
            attr:"src"
          }

        }
      }
  }).then(page => {
      res.send(page);
  });
})

module.exports = router;
