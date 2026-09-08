# Tripi Design System

React component library được build từ Storybook source. Package cung cấp các component UI, type declarations và stylesheet Tailwind đã biên dịch.

## Cài đặt

```bash
npm install shadcn-tailwind-design-system react react-dom
```

## Sử dụng

Import component từ package root và import stylesheet một lần ở entry point của ứng dụng:

```tsx
import { Button, Input, Modal } from 'shadcn-tailwind-design-system'
import 'shadcn-tailwind-design-system/styles.css'

export function Example() {
  return (
    <div className="p-6">
      <Input placeholder="Search" />
      <Button className="mt-4">Save</Button>
    </div>
  )
}
```

Các component dùng class Tailwind và CSS variables trong theme. Nếu ứng dụng cần dark mode, thêm class `dark` vào phần tử gốc chứa giao diện.

## Build package từ source

```bash
npm run build:lib
```

Lệnh trên tạo thư mục `dist` gồm:

- `index.js`: module ESM
- `index.cjs`: module CommonJS
- `styles/globals.css`: CSS Tailwind đã build
- `types/`: type declarations cho TypeScript

## Publish package

Đăng nhập npm trước khi publish:

```bash
npm login
```

Publish đúng version hiện tại, không tăng version:

```bash
npm run publish-package -- current
```

Nếu npm yêu cầu mã 2FA, đặt OTP trong biến môi trường của terminal rồi chạy lại:

```powershell
$env:NPM_OTP = "123456"
npm run publish-package -- current
Remove-Item Env:NPM_OTP
```

Để phát hành bản cập nhật, dùng cùng script với loại version tương ứng:

```bash
npm run publish-package -- patch
```

Script sẽ build package, tăng version trong `package.json` và `package-lock.json` nếu cần, rồi chạy `npm publish`. Có thể dùng `minor`, `major` hoặc `prerelease` thay cho `patch`.