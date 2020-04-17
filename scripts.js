let data = {
    photo: ['photos/broccoli.jpg',
            'photos/brussels-sprouts.jpg',
            'photos/carrots.jpg',
            'photos/garlic.jpg',
            'photos/kale.jpg',
            'photos/peas.jpg', 
            'photos/spinach.jpg',
            'photos/swiss-chard.jpg'],
    title: ['broccoli',
            'brussels-sprout',
            'carrot',
            'garlic',
            'kale',
            'green-pea',
            'spinach',
            'swiss-chard'],
    description: ['Broccoli is rich in sulforaphane that hinder cancer growth.',
                  'Brussels sprouts have kaempferol that reduces the effect of oxidative processes in human cells.',
                  'Carrots have high beta-carotene and antioxidant level. Beta-carotine is essential in vitamin A production while antioxidant reduces the risk of different cancers.',
                  'Garlic reduces sugar and triglyceride levels in blood.',
                  'Kale contains vitamins A, C and K and lower high blood pressure.',
                  'Green peas are rich in saponins and fiber. The former helps to reduce thr risk of cancer, while the latter is good for digestive system.',
                  'Spinach contains many antioxidants that help fighting against chronic diseases such as high blood pressure.',
                  'Swiss chard could lower blood sugar level and demages of diabetes.']
};

$('#photo').attr('src', data.photo);
$('#title').text(data.title);
$('#description').text(data.description);

let currentPhoto = 0;
let currentTitle = 0;
let currentDescription = 0;
let imagesData = [{
        photo: 'photos/broccoli.jpg',
        title: 'broccoli',
        description: 'Broccoli is rich in sulforaphane that hinder cancer growth.'},
        {photo: 'photos/brussels-sprouts.jpg',
        title: 'brussels-sprout',
        description: 'Brussels sprouts have kaempferol that reduces the ffect of oxidative processes in human cells.'},
        {photo: 'photos/carrots.jpg',
        title: 'carrot',
        description: 'Carrots have high beta-carotene and antioxidant level. Beta-carotine is essential in vitamin A production while antioxidant reduces the risk of different cancers.'},
        {photo: 'photos/garlic.jpg',
        title: 'garlic',
        description: 'Garlic reduces sugar and triglyceride levels in blood.'},
        {photo: 'photos/kale.jpg',
        title: 'kale',
        description: 'Kale contains vitamins A, C and K and lower high blood pressure.'},
        {photo: 'photos/peas.jpg',
        title: 'green-pea',
        description: 'Green peas are rich in saponins and fiber. The former helps to reduce thr risk of cancer, while the latter is good for digestive system.'},
        {photo: 'photos/spinach.jpg',
        title: 'spinach',
        description: 'Spinach contains many antioxidants that help fighting against chronic diseases such as high blood pressure.'},
        {photo: 'photos/swiss-chard.jpg',
        title: 'swiss-chard',
        description: 'Swiss chard could lower blood sugar level and the demage of diabetes.'}];
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#title').text(imagesData[currentTitle].title);
$('#description').text(imagesData[currentDescription].description);



let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
}
let loadTitle = (titleNumber) => {
    $('#title').text(imagesData[titleNumber].title);
}
let loadDescription = (descriptionNumber) => {
    $('#description').text(imagesData[descriptionNumber].description);
}

loadPhoto(currentPhoto);
loadTitle(currentTitle);
loadDescription(currentDescription);

$('#right-arrow').click(() => {
  if(currentPhoto < 7) {
    currentPhoto++;}
  else {currentPhoto = 0;}
  loadPhoto(currentPhoto);
});
$('#right-arrow').click(() => {
  if(currentTitle < 7) {
    currentTitle++;}
  else {currentTitle = 0;}
  loadTitle(currentTitle);
});
$('#right-arrow').click(() => {
  if(currentDescription < 7) {
    currentDescription++;}
  else {currentDescription = 0}
  loadDescription(currentDescription);
});
$('#left-arrow').click(() => {
  if(currentPhoto > 1) {
    currentPhoto--;}
  else {currentPhoto = 7}
  loadPhoto(currentPhoto);
});
$('#left-arrow').click(() => {
  if(currentTitle > 1) {
    currentTitle--;}
  else {currentTitle = 7}
  loadTitle(currentTitle);
});
$('#left-arrow').click(() => {
  if(currentDescription > 1) {
    currentDescription--;}
  else {currentDescription = 7}
  loadDescription(currentDescription);
});