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

/*Managing State - reacting to input with state
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
}*/

/*Choosing the state structure
import { useState } from 'react';

export default function Form() {
  const [firstName, SetFirstName] = useState('');
  const [lastName, SetLastName] = useState('');
 
  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    SetFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    SetLastName(e.target.value);
  }

  return (
    <>
    <h2>Let's check you in</h2>
    <label>
      First name:{' '}
      <input 
        value={firstName}
        onChange={handleFirstNameChange}
      />
    </label>

    <label>
      Last name:{' '}
      <input 
        value={lastName}
        onChange={handleLastNameChange}
      />
    </label>
    <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}*/

/*Sharing state between components
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}*/

// Preserving and resetting state
import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat contact={to} />
    </div>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];
