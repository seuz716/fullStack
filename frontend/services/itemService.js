
class itemService{

    constructor(){
        this.URI = '/api/items'
    }

    async getitems(){
    const res =   await fetch(this.URI);
    const items = await res.json();
    return items;
    }
    

    async postitem(item){
      const res = await fetch(this.URI,{
          method: 'POST',   
          body: item
      });
      const data = await res.json();
      return data
    }

   async deleteitem(itemId){
    const res = await fetch(`${this.URI}/${itemId}`,{
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    
    });
    
   const data = await res.json();
   console.log(data);
   console.log(itemId);
   }
}

export default itemService;