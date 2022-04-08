import ItemService from "./services/itemService";
const itemService = new ItemService();

import { format } from "timeago.js";
class UI {
  async renderitems() {
    const items = await itemService.getitems();
    const itemsCardContainer = document.getElementById("items-cards");
    itemsCardContainer.innerHTML = '';
    items.forEach((item) => {
      const div = document.createElement('div');
      div.className = "noni";
      div.innerHTML =`
        <div class="card m-2">
          <div class="row">
            <div class="col-md-4">
              <img src="${item.imagePath}" alt="" class="img-fluid" />
            </div>
            <div class="col-md-8">
              <div class="card-block px-2">
                <h4 class="card-title">${item.title}</h4>
                <p class="card-text">${item.author}</p>
                <a href="#" class="btn btn-danger delete" _id="${item._id}"></a>
              </div>
            </div>
          </div>
          <div class="card-footer">${format(item.created_at)}</div>
        </div>
        `;
      itemsCardContainer.appendChild(div);
      
    });
  }

  async addANewitem(item) {
    await itemService.postitem(item);
    this.renderitems();
    this.clearitemForm();
  }

  clearitemForm() {
    document.getElementById("item-form").reset();
  }

  async renderMessage(message, colorMessage, secondsToRemove) {
      const div = document.createElement('div');
      div.className= `alert alert-${colorMessage}`;
      div.appendChild(document.createTextNode(message));
      div.id = "message"

      const container = document.getElementById('col');
      const itemForm =document.getElementById('item-form');

      container.insertBefore(div, itemForm);
      setTimeout(()=> {
        document.getElementById('message').remove();
      }, secondsToRemove);

  }

 async deleteitem(itemId) {
  await  itemService.deleteitem(itemId);
  this.renderitems();
 
 }
}

export default UI;
