/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    for(let i=0;i<=(haystack.length-needle.length);i++)
        {let found=true;
            for(let j=0;j<needle.length;j++)
                {
                    if(needle.charAt(j)!=haystack.charAt(i+j))
                        {
                            found=false;
                            break;
                        }
                }
         if(found)
             {
                 return i;
             }
        }
    return -1;
};