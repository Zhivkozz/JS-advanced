function name(params) {
  let  a =  params.sort(function(a, b) {
        var nameA = a.toUpperCase(); // ignore upper and lowercase
        var nameB = b.toUpperCase(); // ignore upper and lowercase
        if (nameA.length < nameB.length) {
          return -1;
        }
        if (nameA.length > nameB.length) {
          return 1;
        }
        if (nameA < nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return -1;
          }
    return 0 
      });
      a.forEach(element => {
          console.log(element)
      });
} //100/100
name(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'Georgeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa']
)