import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
  <header>
    <h1>Welcome</h1>
    <p>A Simple Counter App</p>
  </header>
  
  <main>
    <div class="card">
      <h2>Counter Application</h2>
      <p>Click the button to increase the counter</p>
      <button id="counter" type="button" class="btn-primary"></button>
    </div>
  </main>

  <footer>
    <p>Built with TypeScript and Vite</p>
  </footer>
</div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
