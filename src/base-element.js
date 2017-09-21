class BaseElement extends HTMLElement {
	connectedCallback() {
		const importDoc = document.currentScript.ownerDocument;
		const tpl = importDoc.querySelector('template');
		const tplClone = tpl.content.cloneNode(true);
		const children = tplClone.getElementById('children');
		children.innerHTML = this.innerHTML;
		this.innerHTML = '';
		this.appendChild(tplClone);
	}
}

