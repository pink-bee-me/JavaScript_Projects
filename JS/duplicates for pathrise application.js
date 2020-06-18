let number_list = [7,8,94,56,73,54,6,5,8,94,56];
let unique_num_list =[ ];
let duplicate_num_list = [ ];
let content = 'Duplicate Integer Result: ' + duplicate_num_list.join(' , ');


function check_num_list() {
    let i=0;
    for (i = 0; i < number_list.length;) {
        if (i > number_list.length){
            break;
        }
        var num_first = (number_list.indexOf(number_list[i]));
        var num_last = (number_list.lastIndexOf(number_list[i])); 
            if (num_first !== num_last){
                duplicate_num_list.push[number_list[i]];
                i++;
             }
            }
        }
      //  if (unique_num_list.includes(item)) {

       // if(duplicate_num_list.includes.indexOf[item] == -1) {
       //     duplicate_num_list.push(item)
       // }

      // } else {
         
       // if (unique_num_list.indexOf[item] == -1) {
            //   unique_num_list.push(item)
         //    }
         //   }      
    
   //  }
  //  }
     