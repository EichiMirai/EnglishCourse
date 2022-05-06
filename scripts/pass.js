db.collection('passedLessons').get().then(snapshot => {
    setupGuides(snapshot.docs);
  });
  const guideList = document.querySelector('.guides');
  const setupGuides = (data) => {

    let html = '';
    data.forEach(doc => {
      const lesson = doc.data();
        console.log(lesson.lesson1);
    });
  
  };