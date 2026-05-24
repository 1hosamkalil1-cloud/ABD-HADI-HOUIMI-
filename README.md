# 🎮 Mj - متجر الألعاب الرقمية

موقع متجر ألعاب رقمية احترافي وعصري بتصميم يشبه منصات التسوق الشهيرة

## 📋 المحتويات

- `index.html` - الصفحة الرئيسية
- `style.css` - التصميم والأنماط
- `script.js` - الوظائف التفاعلية

## ✨ المميزات

### 🎨 التصميم
- ✅ تصميم عصري وحديث (Dark Mode)
- ✅ ألوان نيون جذابة (أزرق وزهري)
- ✅ تأثيرات بصرية احترافية (Gradient, Animations)
- ✅ تجربة مستخدم سلسة وسهلة
- ✅ متجاوب مع جميع الأجهزة (Responsive Design)

### 🛒 الوظائف
- ✅ عرض الألعاب في شبكة جميلة
- ✅ إضافة الألعاب إلى السلة
- ✅ حفظ السلة تلقائياً (Local Storage)
- ✅ عرض تفاصيل الأسعار والخصومات
- ✅ حساب الإجمالي تلقائياً
- ✅ البحث عن الألعاب
- ✅ إشعارات تفاعلية
- ✅ تكامل مع WhatsApp

### 🌐 الدعم اللغوي
- ✅ دعم كامل للغة العربية
- ✅ اتجاه النصوص من اليمين إلى اليسار (RTL)

## 🚀 كيفية الاستخدام

### الخيار 1: فتح المحلي
```bash
# 1. انزل أو انسخ الملفات
# 2. افتح index.html في المتصفح
```

### الخيار 2: GitHub Pages
```bash
# 1. ادخل إلى Settings في المستودع
# 2. اختر Pages
# 3. اختر main branch
# 4. رابطك سيكون:
https://1hosamkalil1-cloud.github.io/ABD-HADI-HOUIMI-/
```

## 📱 الأجهزة المدعومة

| الجهاز | الدعم |
|-------|-------|
| Desktop | ✅ مثالي |
| Tablet | ✅ مثالي |
| Mobile | ✅ مثالي |

## 🎮 الألعاب المتضمنة

1. **RimWorld Deluxe** - 14.99$
2. **Divinity Original Sin 2** - 14.99$
3. **Disco Elysium** - 19.99$
4. **Stray** - 9.99$
5. **Better Than Dead** - 8.99$
6. **Windrose** - 12.99$
7. **Subnautica 2** - 17.99$
8. **Forza Horizon** - 19.99$

## 🛠️ تخصيص الموقع

### إضافة لعبة جديدة
```html
<!-- أضف كود الكارت التالي في games-grid -->
<div class="game-card">
    <div class="game-image">
        <img src="صورة-اللعبة" alt="اسم اللعبة">
        <div class="platform-badge">PC - سيتم</div>
    </div>
    <div class="game-info">
        <h3 class="game-title">اسم اللعبة</h3>
        <p class="game-desc">وصف اللعبة</p>
        <div class="game-price">
            <span class="original-price">السعر الأصلي$</span>
            <span class="discount-price">السعر الخصم$</span>
        </div>
        <button class="add-to-cart-btn" onclick="addToCart('اسم اللعبة', السعر)">
            <i class="fas fa-plus"></i>
            <span>أضف للسلة</span>
        </button>
    </div>
</div>
```

### تغيير الألوان
في `style.css` غيّر المتغيرات:
```css
:root {
    --accent-blue: #00d4ff;      /* اللون الأزرق */
    --accent-pink: #ff006e;      /* اللون الزهري */
    --primary-color: #0a0e27;    /* اللون الأساسي */
}
```

### تغيير رقم WhatsApp
في `index.html` غيّر:
```html
<a href="https://wa.me/966500000000" ...>
```

## 📊 هيكل الملفات

```
ABD-HADI-HOUIMI-/
├── index.html          # الصفحة الرئيسية
├── style.css          # التصميم
├── script.js          # الوظائف
└── README.md          # التوثيق
```

## 💻 تقنيات مستخدمة

- HTML5
- CSS3 (Flexbox, Grid, Animations, Gradients)
- Vanilla JavaScript (ES6+)
- Local Storage API
- FontAwesome Icons
- Google Fonts

## 📈 الأداء

- ⚡ سرعة تحميل سريعة جداً
- 📦 حجم الملفات صغير
- 🎯 محسّن للـ SEO
- 🔒 آمن وموثوق

## 🌟 الميزات المستقبلية

- [ ] نظام تسجيل دخول حقيقي
- [ ] بوابة دفع متكاملة
- [ ] تقييمات وآراء المستخدمين
- [ ] نظام ترشيحات ذكي
- [ ] دعم لغات إضافية
- [ ] لوحة تحكم للمسؤول

## 📞 التواصل

- **WhatsApp**: +966 5xx-xxx-xxxx
- **البريد الإلكتروني**: contact@mj-store.com

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License

## 👨‍💻 المطور

تم إنشاء هذا الموقع بواسطة: **1hosamkalil1-cloud**

## 🎉 شكراً

شكراً لاستخدامك متجر Mj! نتمنى لك تجربة تسوق رائعة! 🚀

---

**آخر تحديث**: مايو 2026
