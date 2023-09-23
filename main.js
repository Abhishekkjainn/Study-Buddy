let a;
fetch(
  'https://script.google.com/macros/s/AKfycbyrXXQwlusD3d9HTmBE3MV2QlMSLt-haP2GbWbitFcdy9itsooRPlJESp_yMsc1VNp9WA/exec'
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
// console.log(a);

// fetch(
//   'https://script.google.com/macros/s/AKfycbwx8ZDjJvX61bP-mjrPLMBPs2l2DBQisGd5ql4ksZIcabb4u3ICgQ0L52QIuIum0640/exec'
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// const cardData = [
//   {
//     subjecthead: 'Python',
//     subjectbranch: 'Loops',
//     topiccard: 'Loops , Recursion',
//     datecard: '19/85/7845',
//     phonelink: '+91 9301303584',
//     emaillink: 'jainabhishek1904@gmail.com',
//   },
//   {
//     subjecthead: 'java',
//     subjectbranch: 'constructor',
//     topiccard: 'Loops , Recursion and functions',
//     datecard: '19/85/1354',
//     phonelink: '+91 9301305454',
//     emaillink: 'jainabhishek1904@gmail.com',
//   },
//   {
//     subjecthead: 'c++',
//     subjectbranch: 'pointer',
//     topiccard: 'Loops , Recursion ,pointer',
//     datecard: '19/85/5894',
//     phonelink: '+91 9301303584',
//     emaillink: 'jainabhishek1904@gmail.com',
//   },
//   {
//     subjecthead: 'Javascript',
//     subjectbranch: 'fetchAPI',
//     topiccard: 'Loops , Recursion,API',
//     datecard: '19/85/9896',
//     phonelink: '+91 9301303584',
//     emaillink: 'jainabhishek1904@gmail.com',
//   },
// ];

// const cardContainer = document.getElementById('cardcontainer');

// cardData.forEach((card) => {
//   const cardElement = document.createElement('div');
//   cardElement.classList.add('cardcontainer');

//   // Create and set the title element
//   const titleElement = document.createElement('p');
//   titleElement.classList.add('subjecthead');
//   titleElement.textContent = card.subjecthead;

//   // Create and set the title element
//   const underElement = document.createElement('p');
//   underElement.classList.add('subjectbranch');
//   underElement.textContent = card.subjectbranch;

//   // Create and set the title element
//   const topicElement = document.createElement('p');
//   topicElement.classList.add('topiccard');
//   topicElement.textContent = card.topiccard;

//   // Create and set the title element
//   const lastElement = document.createElement('div');
//   lastElement.classList.add('lastdiv');

//   const dateElement = document.createElement('p');
//   dateElement.classList.add('datecard');
//   dateElement.textContent = card.datecard;

//   cardElement.appendChild(titleElement);
//   cardElement.appendChild(underElement);
//   cardElement.appendChild(topicElement);
//   cardElement.appendChild(lastElement);
//   cardElement.appendChild(dateElement);

//   cardContainer.appendChild(cardElement);
// });

// const cardData = [
//   {
//     subjecthead: 'Python',
//     subjectbranch: 'Loops',
//     topiccard: 'Loops , Recursion',
//     datecard: '19/85/7845',
//     phonelink: '+91 9301303584',
//     emaillink: 'jainabhishek1904@gmail.com',
//   },
//   {
//     subjecthead: 'java',
//     subjectbranch: 'constructor',
//     topiccard: 'Loops , Recursion and functions',
//     datecard: '19/85/1354',
//     phonelink: '+91 9301305454',
//     emaillink: 'jainabhishek1904@gmail.com',
//   },
//   {
//     subjecthead: 'c++',
//     subjectbranch: 'pointer',
//     topiccard: 'Loops , Recursion ,pointer',
//     datecard: '19/85/5894',
//     phonelink: '+91 9301303584',
//     emaillink: 'jainabhishek1904@gmail.com',
//   },
//   {
//     subjecthead: 'Javascript',
//     subjectbranch: 'fetchAPI',
//     topiccard: 'Loops , Recursion,API',
//     datecard: '19/85/9896',
//     phonelink: '+91 9301303584',
//     emaillink: 'jainabhishek1904@gmail.com',
//   },
//   {
//     subjecthead: 'Javascript',
//     subjectbranch: 'fetchAPI',
//     topiccard: 'Loops , Recursion,API',
//     datecard: '19/85/9896',
//     phonelink: '+91 9301303584',
//     emaillink: 'jainabhishek1904@gmail.com',
//   },
// ];

const cardContainer = document.getElementById('card-container');

cardData.forEach((card) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('cardcontainer');

  // Create and set the title element
  const titleElement = document.createElement('p');
  titleElement.classList.add('subjecthead');
  titleElement.textContent = `Subject: ${card.subjecthead}`;

  // Create and set the subject branch element
  const subjectBranchElement = document.createElement('p');
  subjectBranchElement.classList.add('subjectbranch');
  subjectBranchElement.textContent = `Branch: ${card.subjectbranch}`;

  // Create and set the topic element
  const topicElement = document.createElement('p');
  topicElement.classList.add('topiccard');
  topicElement.textContent = `Topics: ${card.topiccard}`;

  // Create and set the last element
  const lastElement = document.createElement('div');
  lastElement.classList.add('lastdiv');

  // Create and set the date element
  const dateElement = document.createElement('p');
  dateElement.classList.add('datecard');
  dateElement.textContent = `Date: ${card.datecard}`;

  cardElement.appendChild(titleElement);
  cardElement.appendChild(subjectBranchElement);
  cardElement.appendChild(topicElement);
  cardElement.appendChild(lastElement);
  cardElement.appendChild(dateElement);

  cardContainer.appendChild(cardElement);
});
