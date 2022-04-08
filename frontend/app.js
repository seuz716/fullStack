import 'bootswatch/dist/darkly/bootstrap.min.css';  
import UI from './UI';


document.addEventListener('DOMContentLoaded', () => {
    const ui =new UI();
    ui.renderitems();
})
document.getElementById('item-form')
.addEventListener('submit', e=> {
    const title =  document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);

 const ui = new UI();
    ui.addANewitem(formData);
    ui.renderMessage('New item Added', 'succes', 3000);
    e.preventDefault();
});

document.getElementById('items-cards')
    .addEventListener('click',e=>{
        if(e.target.classList.contains('delete')){
            const ui = new UI();
            ui.deleteitem(e.target.getAttribute('_id'));
            ui.renderMessage('item Removed', 'danger', 2000);
        }
        e.preventDefault;
    });
