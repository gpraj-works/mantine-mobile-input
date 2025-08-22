Nice 👍 Adding a **Mantine Form usage example** will make the README much more valuable.
Here’s the improved **README.md** with your request included:

---

## 📄 `README.md`

````markdown
# 📱 mantine-mobile-input

A simple, customizable **Mantine** component for mobile/phone input with country code selection.  
Built on top of [@mantine/core](https://mantine.dev/) and [react-international-phone](https://www.npmjs.com/package/react-international-phone).

---

## ✨ Features

- 📱 Phone number input with **country code selector**
- 🌍 Built-in **flags & country list**
- 🎨 Fully compatible with **Mantine styles & themes**
- ⚡ Supports **TypeScript & JavaScript**
- 📦 Works with **npm, yarn, pnpm, bun**

---

## 🚀 Installation

```bash
# npm
npm install mantine-mobile-input

# yarn
yarn add mantine-mobile-input

# pnpm
pnpm add mantine-mobile-input

# bun
bun add mantine-mobile-input
````

You’ll also need peer dependencies if not already installed:

```bash
npm install react react-dom @mantine/core @mantine/hooks react-international-phone
```

---

## 🔨 Usage

### Basic

```tsx
import { MobileInput } from "mantine-mobile-input";

function App() {
  return (
    <MobileInput placeholder="Enter phone number" />
  );
}
```

---

### With Mantine Form

```tsx
import { useForm } from "@mantine/form";
import { MobileInput } from "mantine-mobile-input";

function App() {
  const form = useForm({...});

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <MobileInput
        label="Mobile"
        withAsterisk
        placeholder="Enter mobile number"
        key={form.key("mobile")}
        {...form.getInputProps("mobile")}
      />
    </form>
  );
}
```

---

## ⚙️ Props

`MobileInput` accepts all [Mantine `<TextInput />` props](https://mantine.dev/core/text-input/).

Example:

```tsx
<MobileInput
  placeholder="Enter your number"
  label="Phone"
  withAsterisk
  onChange={(e) => console.log(e.target.value)}
/>
```

---

## 📂 Project Structure

```
mantine-mobile-input/
├── src/                # Component source
│   ├── MobileInput.tsx
│   └── index.ts
├── dist/               # Compiled output
│   ├── cjs/
│   ├── esm/
│   └── types/
```

---

## 🤝 Contributing

Pull requests and issues are welcome!
If you’d like to add features (like validation or custom formatting), feel free to open a PR.

---

## 📜 License

[MIT](./LICENSE) © 2025 Your Name

```

---

👉 Do you also want me to add a **section with screenshots/GIF** (showing the dropdown flag selector + input field) so users immediately see what the component looks like, or just keep the usage examples in code?
```
