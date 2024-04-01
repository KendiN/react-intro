/*function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function AboutPage() {
  return (
    <>
    <h1>About</h1>
    <p>Hello there. <br />How do you do?</p>
    </>
  )
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <img className = "avatar" />
    </div>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
    <h1>{user.name}</h1>
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
    </>
  );
}*/

/*const products = [
  {title: 'Cabbage', isFruit: false, id: 1 },
  {title: 'Garlic', isFruit: false, id: 2 },
  {title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li> 
  );

  return (
    <ul>{listItems}</ul>
  );
}

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <MyButton />
    </div>
  );
}*/

/*counter that update separately
import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const[count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

return (
  <button onClick={handleClick}>
      Clicked {count} times
  </button>
 );
} 

//counters that update together
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}*/

//Managing State - reacting to input with state
import { useState } from 'react';

export default function Form() {
  const [answer, SetAnswer] = useState('');
  const [error, SetError] = useState(null);
  const [status, SetStatus] = useState('typing');
  
  if (status === 'success'){
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    SetStatus('submitting');
    try {
      await submitForm(answer);
      SetStatus('success');
    } catch (err) {
      SetStatus('typing');
      SetError(err);
    }
  }

  function handleTextareaChange(e) {
    SetAnswer(e.target.value);
  }

  return (
    <>
    <h2>City quiz</h2>
    <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }>
          Submit
        </button>
        {error !==null &&
        <p className='Error'>
          {error.message}
        </p>
        }
      </form>
    </>
  );
}

function submitForm(answer) {
  //pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    },1500);
  });
}