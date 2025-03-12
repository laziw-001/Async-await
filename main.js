const url = 'https://randomuser.me/api/'
let container = document.querySelector('.container')

async function randomUser() {
	let respone = await fetch(url)
	let data = await respone.json()
	console.log(data)

	let cardParent = document.createElement('div')
	cardParent.classList.add('cardParent')
	cardParent.innerHTML = `
	
		<img src="${data.results[0].picture.large}">
		<div class="profile-container">
			<div class = "card">
				<div class="cardTop">
					<h1>${data.results[0].name.first + ' ' + data.results[0].name.last}</h1>
					<h3>Frontend Developer </h3>
				</div>
				<div class = "text">
					<div class="line-container">
					<div class="line"></div>
					<div class="line"></div>
				</div>
				<p>Phone: ${data.results[0].phone}</p>
				<p>Location: ${data.results[0].location.city}</p>
				<p>Age: ${data.results[0].dob.age}</p>
				<p>Email: ${data.results[0].email}</p>
			</div>
		</div>
	<button class="btn">Change user</button>
	`

	container.innerHTML = ''
	container.appendChild(cardParent)
	document.querySelector('.btn').addEventListener('click', randomUser)
}

randomUser()
