# Taskwise React

---

## 🔗 راهنمای سریع به زبان‌ها (Quick Jump)

[فارسی](#فارسی) | [English](#english) | [العربية](#العربية) | [Français](#français) | [Deutsch](#deutsch)

---

## فارسی
این یک اپلیکیشن ساده مدیریت وظایف (Task Manager) است که با استفاده از React 19 و ViteJS توسعه داده شده است. ساختار پروژه شامل پوشه‌های کامپوننت‌ها و کانتکست می‌باشد.

### هدف پروژه
نمایش توانایی استفاده از Context API در React 19 و تسلط بر آن.

### چرا از Context API استفاده شده است؟
- سادگی پروژه و نیاز به مدیریت حالت بین کامپوننت‌ها
- جلوگیری از ارسال پراپ‌های زیاد (prop drilling)
- نمایش کاربرد عملی Context API در پروژه‌های واقعی

### چرا پروژه Task Manager انتخاب شده است؟
- پروژه‌ای کاربردی و قابل فهم برای اکثر توسعه‌دهندگان
- مناسب برای نمایش مدیریت حالت و تعامل کامپوننت‌ها
- قابلیت توسعه و افزودن ویژگی‌های بیشتر

### توسعه‌دهنده
این پروژه توسط سید احمد (توسعه‌دهنده فرانت‌اند) توسعه داده شده است.

### تکنولوژی‌های استفاده شده
- React 19
- ViteJS
- Tailwind CSS برای استایل‌دهی
- uuid برای تولید شناسه یکتا در کامپوننت TaskForm
- TypeScript برای افزایش کیفیت و امنیت کد

---

### ویژگی‌های پروژه

#### ذخیره‌سازی در LocalStorage
- تمامی وظایف کاربر به صورت خودکار در LocalStorage مرورگر ذخیره می‌شوند.
- این باعث می‌شود که با رفرش صفحه یا بستن مرورگر، داده‌ها حفظ شوند و کاربر مجدداً بتواند لیست وظایف خود را ببیند.
- در صورتی که کاربر همه وظایف را پاک کند، وظایف نمونه (Sample Tasks) به صورت خودکار بارگذاری می‌شوند تا همیشه ساختار و نحوه استفاده برنامه برای کاربر واضح باشد.

#### افزودن تسک به تقویم گوگل
- کاربر می‌تواند وظایفی که تاریخ سررسید دارند را با یک کلیک به تقویم گوگل خود اضافه کند.
- این ویژگی به بهبود مدیریت زمان و یادآوری وظایف مهم کمک می‌کند.
- دکمه «Add to Google Calendar» به صورت هوشمند فقط برای تسک‌هایی که تاریخ دارند نمایش داده می‌شود.

#### ویرایش تسک‌ها
- قابلیت ویرایش اطلاعات هر وظیفه مانند عنوان، یادداشت، اولویت و تاریخ مهلت اضافه شده است.
- کاربر با کلیک روی دکمه «Edit» می‌تواند اطلاعات تسک را در فرم مشابه فرم ایجاد وظیفه تغییر دهد.
- پس از ویرایش، اطلاعات جدید ذخیره شده و در لیست به‌روزرسانی می‌شوند.

#### داده نمونه (Sample Data)
- تعدادی تسک نمونه با اولویت‌های مختلف و تاریخ‌های متفاوت به صورت پیش‌فرض در برنامه قرار داده شده‌اند.
- این داده‌ها کمک می‌کنند کاربر با ساختار داده‌ها و امکانات برنامه بهتر آشنا شود.
- نمونه داده‌ها وقتی که لیست وظایف کاربر خالی است به صورت خودکار نمایش داده می‌شوند.

---

### چرا این اپ وظایف یک اپ معمولی نیست؟

- **مدیریت حالت با Context API**: استفاده از Context API در React 19 برای مدیریت حالت به جای Prop Drilling یا ابزارهای سنگین‌تر، که این امکان را می‌دهد پروژه سبک، ماژولار و قابل گسترش باشد.
- **ذخیره‌سازی محلی بدون نیاز به سرور**: استفاده از LocalStorage برای ذخیره داده‌ها، بدون نیاز به دیتابیس خارجی یا سرور، که برنامه را سریع و مستقل می‌کند.
- **ادغام با سرویس‌های خارجی**: امکان افزودن تسک به تقویم گوگل به صورت داینامیک، که فراتر از یک اپ وظیفه ساده است و تجربه کاربری را بهبود می‌دهد.
- **امکانات کامل CRUD**: امکان افزودن، حذف، ویرایش و علامت‌گذاری وظایف به عنوان انجام شده، با رابط کاربری روان و واکنش‌گرا.
- **قابلیت توسعه و سفارشی‌سازی آسان**: معماری پروژه به گونه‌ای طراحی شده که اضافه کردن ویژگی‌های جدید و تغییرات بسیار ساده است.
- **حفظ داده‌ها به صورت هوشمند**: حتی با پاک کردن همه وظایف، نمونه داده‌ها دوباره بارگذاری می‌شوند تا کاربر همیشه تجربه استفاده از برنامه را داشته باشد.

---

## English
This is a simple Task Manager application developed using React 19 and ViteJS. The project structure includes components and context folders.

### Project Purpose
Showcase the ability to use Context API in React 19 and master it.

### Why Context API?
- Simplicity and need for state management between components
- Avoiding excessive prop drilling
- Demonstrating practical use of Context API in real projects

### Why Task Manager?
- Practical and easy to understand for most developers
- Suitable for demonstrating state management and component interaction
- Expandable and feature-rich

### Developer
Developed by Seyed Ahmad (Frontend Developer)

### Technologies Used
- React 19
- ViteJS
- Tailwind CSS for styling
- uuid for unique ID generation in TaskForm component
- TypeScript for code quality and safety

---

### Features

#### LocalStorage Persistence
- User tasks are automatically saved in the browser's LocalStorage.
- Data is retained after page refresh or browser close.
- Sample tasks are loaded automatically if the user clears all tasks.

#### Add to Google Calendar
- Tasks with deadlines can be added to Google Calendar with one click.
- Improves time management and reminders.
- The "Add to Google Calendar" button appears only for tasks with a deadline.

#### Task Editing
- Users can edit task details such as title, note, priority, and deadline.
- Editing is done via a form similar to the add task form.
- Changes are saved and reflected immediately.

#### Sample Data
- Predefined sample tasks with various priorities and deadlines.
- Helps users understand the data structure and app features.
- Automatically loaded when the user's task list is empty.

---

### Why This Task App Is Not Just Ordinary?

- **Context API State Management**: Lightweight and modular state management without prop drilling or heavy libraries.
- **LocalStorage Based Persistence**: No backend or database needed, making the app fast and standalone.
- **Integration with External Services**: Dynamic Google Calendar integration enhances user experience beyond a typical task app.
- **Full CRUD Features**: Add, remove, edit, and toggle task completion with a smooth and responsive UI.
- **Easy Extensibility**: Designed architecture for simple feature additions and customizations.
- **Smart Data Retention**: Sample tasks reload if the user deletes all tasks, maintaining a usable interface.

---

## العربية
هذا تطبيق بسيط لإدارة المهام تم تطويره باستخدام React 19 و ViteJS. هيكل المشروع يتضمن مجلدات للمكونات والسياق.

### هدف المشروع
عرض القدرة على استخدام Context API في React 19 وإتقانها.

### لماذا تم استخدام Context API؟
- بساطة المشروع والحاجة لإدارة الحالة بين المكونات
- تجنب تمرير الخصائص بشكل مفرط (prop drilling)
- عرض الاستخدام العملي لـ Context API في المشاريع الحقيقية

### لماذا تم اختيار مشروع إدارة المهام؟
- مشروع عملي وسهل الفهم لمعظم المطورين
- مناسب لعرض إدارة الحالة وتفاعل المكونات
- قابل للتطوير وإضافة ميزات أكثر

### المطور
تم تطوير هذا المشروع بواسطة سيد أحمد (مطور الواجهة الأمامية)

### التقنيات المستخدمة
- React 19
- ViteJS
- Tailwind CSS للتصميم
- uuid لإنشاء معرفات فريدة في مكون TaskForm
- TypeScript لتحسين جودة وأمان الكود

---

## Français
Il s’agit d’une application simple de gestion de tâches développée avec React 19 et ViteJS. La structure du projet comprend des dossiers de composants et de contexte.

### Objectif du projet
Montrer la capacité à utiliser Context API dans React 19 et à la maîtriser.

### Pourquoi Context API ?
- Simplicité du projet et besoin de gestion d’état entre les composants
- Éviter le prop drilling excessif
- Montrer l’utilisation pratique de Context API dans des projets réels

### Pourquoi le gestionnaire de tâches ?
- Projet pratique et facile à comprendre pour la plupart des développeurs
- Adapté pour démontrer la gestion d’état et l’interaction des composants
- Extensible et riche en fonctionnalités

### Développeur
Développé par Seyed Ahmad (Développeur Frontend)

### Technologies utilisées
- React 19
- ViteJS
- Tailwind CSS pour le style
- uuid pour la génération d’ID unique dans le composant TaskForm
- TypeScript pour la qualité et la sécurité du code

---

## Deutsch
Dies ist eine einfache Aufgabenmanager-Anwendung, die mit React 19 und ViteJS entwickelt wurde. Die Projektstruktur umfasst Komponenten- und Kontextordner.

### Projektziel
Fähigkeit zur Nutzung der Context API in React 19 demonstrieren und beherrschen.

### Warum Context API?
- Einfachheit des Projekts und Bedarf an Zustandsverwaltung zwischen Komponenten
- Vermeidung von übermäßigem Prop-Drilling
- Praktische Anwendung der Context API in echten Projekten zeigen

### Warum Task Manager?
- Praktisch und leicht verständlich für die meisten Entwickler
- Geeignet zur Demonstration von Zustandsverwaltung und Komponenteninteraktion
- Erweiterbar und funktionsreich

### Entwickler
Entwickelt von Seyed Ahmad (Frontend-Entwickler)

### Verwendete Technologien
- React 19
- ViteJS
- Tailwind CSS für das Styling
- uuid zur eindeutigen ID-Erstellung im TaskForm-Komponenten
- TypeScript für Codequalität und Sicherheit

---

### شبکه‌های اجتماعی | Social Media

- Follow my Persian Articles on Virgool[ویرگول](https://virgool.io/@seyedahmaddv)
- Follow my English Articles on Dev[Dev.to](https://dev.to/seyedahmaddv)
- [Contact me or Know More me](https://www.linkedin.com/in/seyedahmaddv)
