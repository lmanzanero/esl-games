<script>
	import Square from './square.svelte';
</script>

<div class="board-row">
	<Square
		index="0"
		word="Tomato"
		background="https://indochina-agriculture.com/wp-content/uploads/2019/12/p3.jpg"
	/>
	<Square
		index="1"
		word="Orange"
		background="https://www.luluhypermarket.com/medias/1291292-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjM5OTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDU0L2g4MS85MTQ4Mjc4MTEyMjg2LmpwZ3w0ODI2ZjY1NzU5NGU3ZGJiYTExMTM4NzNkODZlYjRjYTBmNzNkMTdkYmQ0ZjFiMTk0YjNlMDk3YjRkZTUxNjVh"
	/>
	<Square
		index="2"
		word="Strawberry"
		background="https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320894/strawberry-on-white-background-to-represent-strawberry-tongue.jpg"
	/>
</div>
<div class="board-row">
	<Square
		index="3"
		word="Guava"
		background="https://img.freepik.com/free-photo/close-up-guava-fruit-pink-fresh-organic-with-leaves-whole-sliced-isolated-white-background-front-view_59529-240.jpg?size=626&ext=jpg"
	/>
	<Square
		index="4"
		word="Kiwi"
		background="https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg"
	/>
	<Square
		index="5"
		word="Mango"
		background="https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg"
	/>
</div>
<div class="board-row">
	<Square
		index="6"
		word="Banana"
		background="https://static.libertyprim.com/files/familles/banane-large.jpg?1569271725"
	/>
	<Square
		index="7"
		word="Pineapple"
		background="https://www.meijer.com/content/dam/meijer/product/0002/40/0005/98/0002400005988_1_A1C1_0600.png"
	/>
	<Square
		index="8"
		word="Watermelon"
		background="https://www.kroger.com/product/images/xlarge/front/0000000003421"
	/>
</div>

<style>
	.board-row:after {
		clear: both;
		content: '';
		display: table;
	}
</style>
