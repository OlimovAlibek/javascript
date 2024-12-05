//fetch with forms
//to do list


function addList(text) {
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    li.textContent = text
    ul.appendChild(li)
}

addList("Ali")

function removeFirstList() {
    const ul = document.querySelector("ul")
    const firstLi = ul.querySelector("li")
    
        ul.removeChild(firstLi)
}

removeFirstList()


function toggleHighlight(buttonId)  {
    const button = document.getElementById("myButton")
    button.classList.toggle("highlight")
}

function textUpdater(pID, newText) {
    const p = document.getElementById(pID)
    p.textContent = newText
}

textUpdater("info", "Ali")

function optionAdder(id, options) {
    const select = document.getElementById(id)
    options.forEach(elementText => {
        const option = document.createElement('option')
        option.value = elementText.toLowerCase()
        option.textContent = elementText
        select.appendChild(option)
    });
}

optionAdder("myDropdown", ["hello", "again", "adasdasd"])


function divCreator() {
    const div = document.createElement('div')
    div.className = "card"
    const text = document.createElement('h3')
    text.textContent = "Card Title"
    div.appendChild(text)
    const container = document.getElementById("cardContainer")
    container.appendChild(div)

}

divCreator()


function displayer() {
    const button = document.getElementById("toggleButton")
    const paragraph = document.getElementById("myParagraph")

    button.addEventListener('click', () => {
        if (paragraph.style.display === 'none') {
            paragraph.style.display = 'block'
        }
        else {
            paragraph.style.display = 'none'
        }
    })
}

displayer()


function chCounter() {
    const input = document.getElementById("textInput")
    const p = document.getElementById("charCount")

    input.addEventListener('input', () => {
        p.textContent = `Characters: ${input.value.length}`
    })
}

chCounter()


function formValidator() {
    const form = document.getElementById("myForm")
    const input = document.getElementById("formInput")
    const text = document.getElementById("errorMessage")

    form.addEventListener('submit', (event) => {
        if(input.value.trim() === '') {
            event.preventDefault()
            text.textContent = "Fill the input!"
        } else {
            text.textContent = "Success"
        }
    })

}

formValidator()


function bgChanger() {
    const div = document.getElementById("hoverBox")

    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = "blue"
    })

    div.addEventListener('mouseout', () => {
        div.style.backgroundColor = "black"
    })
}

bgChanger()


function fetchUsersData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(result => {
        if(!result.ok) {
            throw new Error("smth is wrong")
        } else {
            return result.json()
        }
    })
    .then(users => {
        const ul = document.getElementById("userList")
        users.forEach(user => {
            const li = document.createElement('li')
            li.textContent = user.name
            ul.appendChild(li)
        })
    })
    .catch(error => {
        console.error(error)
    })

}


function createUser(name, email) {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email})

    }).then(result => result.json()).then(users => {
        console.log(users)
    })
    
}

console.log(createUser('Alibek', 'qwe@gmail.com'))


function updateUser(userId, newemail) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: newemail})
    }).then(result => result.json()).then(updatesuser => {
        console.log(updatesuser)
    })
}

updateUser(1, "asdasdasd")


function deleteUser(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: 'DELETE',
    }).then(response => {
        if (response.ok) {
            console.log(`User with ID ${userId} deleted.`);
        } else {
            console.error('Failed to delete user.');
        }
    })
}


deleteUser(2)


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('postForm');
    const postList = document.getElementById('postList');
    const postIdInput = document.getElementById('postId');
    const postTitleInput = document.getElementById('postTitle');
    const submitButton = document.getElementById('submitButton');

    // Load initial posts (for display)
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => addPostToDOM(post));
        });

    // Handle form submission for POST or PUT
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = postTitleInput.value;
        const postId = postIdInput.value;

        if (postId) {
            // Update existing post (PUT)
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: postId, title })
            })
                .then(response => response.json())
                .then(updatedPost => {
                    updatePostInDOM(updatedPost);
                    resetForm();
                });
        } else {
            // Create new post (POST)
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title })
            })
                .then(response => response.json())
                .then(newPost => {
                    addPostToDOM(newPost);
                    resetForm();
                });
        }
    });

    // Add post to DOM
    function addPostToDOM(post) {
        const li = document.createElement('li');
        li.id = `post-${post.id}`;
        li.innerHTML = `
            <span>${post.title}</span>
            <button onclick="editPost(${post.id}, '${post.title}')">Edit</button>
            <button onclick="deletePost(${post.id})">Delete</button>
        `;
        postList.appendChild(li);
    }

    // Update post in DOM
    function updatePostInDOM(post) {
        const li = document.getElementById(`post-${post.id}`);
        if (li) {
            li.querySelector('span').textContent = post.title;
        }
    }

    // Delete post (from API and DOM)
    window.deletePost = function (postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: 'DELETE' })
            .then(() => {
                const li = document.getElementById(`post-${postId}`);
                if (li) {
                    li.remove();
                }
            });
    };

    // Edit post
    window.editPost = function (postId, title) {
        postIdInput.value = postId;
        postTitleInput.value = title;
        submitButton.textContent = 'Update Post';
    };

    // Reset form
    function resetForm() {
        postIdInput.value = '';
        postTitleInput.value = '';
        submitButton.textContent = 'Create Post';
    }
});


const tasks = [];

function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.completed ? '✅' : '🔲'} ${task.name}`;
        li.onclick = () => toggleTask(index);
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            removeTask(index);
        };
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Example Usage:
// <ul id="taskList"></ul>
// <input id="taskInput" /><button onclick="addTask(document.getElementById('taskInput').value)">Add</button>

let count = 0

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');



incrementButton.addEventListener('click', () => {
    count++
    counterDisplay.textContent = count
})

decrementButton.addEventListener('click', () => {
    count--
    counterDisplay.textContent = count
})

