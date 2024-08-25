function mincost(arr)
arr.sort((a, b) => a - b);
    
    let totalCost = 0;

    while (arr.length > 1) {
        // Take the two smallest elements
        let first = arr.shift(); // Remove the first element
        let second = arr.shift(); // Remove the new first element
        
        // Calculate the cost to connect them
        let cost = first + second;
        totalCost += cost;
        
        // Insert the new rope back into the array
        arr.push(cost);
        
        // Re-sort the array to maintain the min-heap property
        arr.sort((a, b) => a - b);
    }

    return totalCost;
}

	
  


module.exports=mincost;
