var natural = require('natural'),
    TfIdf = natural.TfIdf,
    tfidf = new TfIdf();

tfidf.addFileSync('affect.txt');
tfidf.addFileSync('perception.txt');
tfidf.addFileSync('action.txt');

// console.log('affect --------------------------------');
// tfidf.tfidfs('affect', function(i, measure) {
//     console.log('affect in document #' + i + ' is ' + measure);
// });
//
// console.log('image --------------------------------');
// tfidf.tfidfs('image', function(i, measure) {
//     console.log('image in document #' + i + ' is ' + measure);
// });


console.log(tfidf.listTerms(0))
// tfidf.listTerms(0 /*document index*/).forEach(function(item) {
//     console.log(item.term + ': ' + item.tfidf);
// });
