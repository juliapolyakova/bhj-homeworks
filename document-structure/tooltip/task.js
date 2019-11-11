const links = document.querySelectorAll('.has-tooltip');


for (let link of links) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        let activeTooltip = document.querySelector('.tooltip_active');
        if (activeTooltip) {
          activeTooltip.parentElement.removeChild(activeTooltip);
        }

        let text = event.target.title;
        let content = `<div class="tooltip tooltip_active">${text}</div>`
        link.insertAdjacentHTML('afterend', content);
       
        let tooltip = document.querySelector('.tooltip');
      
        tooltip.style.top = event.target.getBoundingClientRect().bottom + 5 + 'px';
        tooltip.style.left = event.target.getBoundingClientRect().left + 'px';

    });
}





