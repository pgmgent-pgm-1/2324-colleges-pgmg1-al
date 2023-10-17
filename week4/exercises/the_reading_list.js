const readingList = [
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      alreadyRead: true
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      alreadyRead: false
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      alreadyRead: false
    }
  ];
  
  let tempStr = `
  =============================================================================
  |                               READING LIST                                |
  =============================================================================`;
  readingList.forEach(function (book, index) {
    tempStr += `
  ${book.alreadyRead ? 'You already read' : 'You still need to read'} "${book.title}" by ${book.author}`;
  });
  tempStr += '\n=============================================================================';
  console.log(tempStr);