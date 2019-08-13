function binary_search(list,item){
    let low=0
    let high=list.length-1
    while (low <= high){
        let mid=Math.floor((low+high)/2)
        let guess=list[mid]
        if(guess===item){
            return mid
        }
        if(guess>item){
            high=mid-1
    
        }else{
            low=mid+1
        }
    }
    return null;
    }

    let numbers=[1,4,7,9,23,34,44,63,65,69,87,256]
    
    let trouver=binary_search(numbers,87)

    console.log(trouver)

