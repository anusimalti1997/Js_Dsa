


function tree(rows){
    //it will give output
    // 1
    // 2 3
    // 4 5 6
    // 7 8 9 10
    counter =1;
    for (let i = 1; i <= rows; i++) {
       str='';
       for(let j=1; j<=i;j++){
            str = str + ' ' + counter
            counter ++;
       }
       console.log(str);
    }
}

//test for master branch

//test release 1