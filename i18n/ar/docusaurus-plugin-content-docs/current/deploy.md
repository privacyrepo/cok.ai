# نشر

## النشر باستخدام Vercel

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fprivacyrepo%2Fcok.ai%2Ftree%2Fgh-pages)

## التثبيت


```shell
# Installation
yarn

# Local Development
yarn start

# Build: This command generates static content into the `build` directory
yarn build
```

## تحديثات متزامنة

إذا قمت بنشر مشروعك الخاص على Vercel بنقرة واحدة، فقد تواجه مشكلة تتمثل في الإشارة إلى التحديثات باستمرار. ينشأ هذا من سلوك Vercel الافتراضي المتمثل في إنشاء مشروع جديد لك بدلاً من إنشاء المشروع الحالي، مما يعيق اكتشاف التحديث المناسب. يوصى باتباع الخطوات التالية لإعادة النشر:

1. قم بإزالة المستودع السابق.
2. استخدم زر «fork» الموجود في الزاوية اليمنى العليا من الصفحة لتقسيم المشروع الحالي.
3. في الجزء [صفحة مشروع Vercel الجديدة](https://vercel.com/new) العلوي، حدد المشروع المتشعب مؤخرًا من قسم استيراد مستودع Git وتابع النشر.

### تحديثات تلقائية

> في حالة مواجهة خطأ أثناء تنفيذ Upstream Sync، قم بإجراء شوكة مزامنة واحدة يدويًا.

بمجرد الانتهاء من إنشاء المشروع، نظرًا لقيود GitHub، من الضروري تمكين سير العمل يدويًا على صفحة الإجراءات الخاصة بمشروعك المتشعب وتنشيط إجراء Upstream Sync. عند التنشيط، سيتم تنفيذ التحديثات تلقائيًا على أساس يومي.

![تحديثات تلقائية](https://img.newzone.top/2023-05-19-11-57-59.png?imageMogr2/format/webp)

![تمكين التحديثات التلقائية](https://img.newzone.top/2023-05-19-11-59-26.png?imageMogr2/format/webp)

### تحديثات يدوية

إذا كنت ترغب في التحديث يدويًا على الفور، يمكنك الرجوع [وثائق جيت هاب](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) إليه لمعرفة كيفية مزامنة المشروع المتشعب مع التعليمات البرمجية الأولية.

لا تتردد في إظهار الدعم لهذا المشروع من خلال منحه النجمة/المتابعة، أو من خلال متابعة المؤلف، للبقاء على اطلاع بالإشعارات في الوقت المناسب فيما يتعلق بتحديثات الميزات الجديدة.
