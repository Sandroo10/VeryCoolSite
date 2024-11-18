import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const storedLanguage = localStorage.getItem('language') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: 'Home',
        write: 'Write',
        about: 'About',
        signIn: 'Sign in',
        english: 'English',
        georgian: 'ქართული',
        light: 'Light',
        dark: 'Dark',
        aboutpage: {
          title: 'About BitBlogs',
          paragraph1: 'BitBlogs is a platform that empowers individuals to share their thoughts, ideas, and stories with the world. Whether you\'re a seasoned writer or just starting out, BitBlogs offers a simple and user-friendly interface to create, publish, and manage your content.',
          paragraph2: 'Our mission is to inspire creativity, encourage learning, and connect people through the power of storytelling. Join us today and be part of a growing community of passionate bloggers.',
        },
        post1: {
          title: 'The Future of Blockchain Technology',
          intro: 'Welcome to the detailed article about the future of blockchain technology. Here, we explore how blockchain is transforming industries, its challenges, and its potential future impact on the world.',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        mainPage: {
          futureBlockchain: "The Future of Blockchain Technology",
          coverImageAlt: "Cover image for The Future of Blockchain Technology",
          author: "John Doe",
          publicationDate: "May 15, 2023",
          readTime: "5 min read",
          articleIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
          tags: {
            blockchain: "Blockchain",
            technology: "Technology",
            future: "Future",
            cryptocurrency: "Cryptocurrency",
            programming: "Programming",
            ai: "AI",
            machineLearning: "Machine Learning"
          },
          popularTags: "Popular Tags",
          teamMembers: {
            title: "Team Members",
            inviteText: "Invite your team members to collaborate.",
            members: {
              sofia: {
                name: "Sofia Davis",
                email: "m@example.com"
              },
              jackson: {
                name: "Jackson Lee",
                email: "p@example.com"
              },
              isabella: {
                name: "Isabella Nguyen",
                email: "i@example.com"
              }
            }
          }
        },
        registerPage: {
          title: "Sign Up for BitBlogs",
          subtitle: "Create your account to start blogging",
          nameLabel: "Name",
          namePlaceholder: "John Doe",
          emailLabel: "Email",
          emailPlaceholder: "john@example.com",
          passwordLabel: "Password",
          confirmPasswordLabel: "Confirm Password",
          signUpButton: "Sign Up",
          haveAccount: "Already have an account?",
          signInLink: "Log in"
        },
        signInPage: {
          title: "Log in to BitBlogs",
          subtitle: "Enter your credentials to access your account",
          emailLabel: "Email",
          emailPlaceholder: "john@example.com",
          passwordLabel: "Password",
          passwordPlaceholder: "Enter your password",
          signInButton: "Log In",
          forgotPassword: "Forgot password?",
          noAccount: "Don't have an account?",
          signUpLink: "Sign up"
        }
        
      },
      
      
    },
    ka: {
      translation: {
        home: 'მთავარი',
        write: 'წერა',
        about: 'შესახებ',
        signIn: 'შესვლა',
        english: 'English',
        georgian: 'ქართული',
        light: 'ნათელი',
        dark: 'ბნელი',
        aboutpage: {
          title: 'BitBlogs-ის შესახებ',
          paragraph1: 'BitBlogs არის პლატფორმა, რომელიც აძლევს ინდივიდებს შესაძლებლობას გააზიარონ თავიანთი იდეები, ისტორიები და აზრები მსოფლიოსთვის. მიუხედავად იმისა, გამოცდილი მწერალი ხართ თუ ახლა იწყებთ, BitBlogs გთავაზობთ მარტივ და მოსახერხებელ ინტერფეისს თქვენი კონტენტის შესაქმნელად, გასავრცელებლად და სამართავად.',
          paragraph2: 'ჩვენი მისიაა შთაგონება, სწავლების წახალისება და ხალხის დაკავშირება მოთხრობების ძალის მეშვეობით. შემოგვიერთდით დღესვე და გახდით მზარდი ბლოგერების საზოგადოების ნაწილი.',
        },
        post1: {
          title: 'ბლოკჩეინ ტექნოლოგიის მომავალი',
          intro: 'მოგესალმებით დეტალურ სტატიაში, რომელიც ეხება ბლოკჩეინ ტექნოლოგიის მომავალს. აქ ჩვენ განვიხილავთ, როგორ ცვლის ბლოკჩეინი ინდუსტრიებს, რა გამოწვევები აქვს და რა პოტენციური გავლენა ექნება მომავალში.',
          content: 'ლორემ იპსუმ დოლორ სიტ ამეტ, კონსექტეტურ ადიპისცინგ ელიტ. სედ დო ეისმოდ ტემპორ ინციდიდუნტ უტ ლაბორე ეტ დოლორე მაგნა ალიქუა. უტ ენიმ ად მინიმ ვენიან, ქუის ნოსტრაუდ ექსპიციტატიონ ულამქო ლაბორის ნისი უტ ალიქუიპ ექს ეა კომმოდო კონსეკვატ.',
        },
        mainPage: {
          futureBlockchain: "ბლოკჩეინ ტექნოლოგიის მომავალი",
          coverImageAlt: "სურათი ბლოკჩეინ ტექნოლოგიის მომავლისთვის",
          author: "ჯონ დოუ",
          publicationDate: "15 მაისი, 2023",
          readTime: "5 წთ კითხვისთვის",
          articleIntro: "ლორემ იპსუმ დოლორ სიტ ამეტ, კონსექტეტურ ადიპისცინგ ელიტ. სედ დო ეისმოდ ტემპორ ინციდიდუნტ უტ ლაბორე ეტ დოლორე მაგნა ალიქუა. უტ ენიმ ად მინიმ ვენიან, ქუის ნოსტრაუდ ექსპიციტატიონ ულამქო ლაბორის...",
          tags: {
            blockchain: "ბლოკჩეინი",
            technology: "ტექნოლოგია",
            future: "მომავალი",
            cryptocurrency: "კრიპტოვალუტა",
            programming: "პროგრამირება",
            ai: "ხელოვნური ინტელექტი",
            machineLearning: "მანქანური სწავლა"
          },
          popularTags: "პოპულარული ტეგები",
          teamMembers: {
            title: "გუნდის წევრები",
            inviteText: "მოიწვიეთ თქვენი გუნდის წევრები თანამშრომლობისთვის.",
            members: {
              sofia: {
                name: "სოფია დევისი",
                email: "m@example.com"
              },
              jackson: {
                name: "ჯექსონ ლი",
                email: "p@example.com"
              },
              isabella: {
                name: "იზაბელა ნგუენი",
                email: "i@example.com"
              }
            }
          },
        },
        registerPage: {
          title: "რეგისტრაცია BitBlogs-ზე",
          subtitle: "შეექმნე ანგარიში, რომ დაიწყო ბლოგინგი",
          nameLabel: "სახელი",
          namePlaceholder: "ჯონ დოე",
          emailLabel: "ელ. ფოსტა",
          emailPlaceholder: "john@example.com",
          passwordLabel: "პაროლი",
          confirmPasswordLabel: "გააძლიერეთ პაროლი",
          signUpButton: "რეგისტრაცია",
          haveAccount: "მომხმარებელი გაქვს?",
          signInLink: "შესვლა"
        },
        signInPage: {
          title: "შესვლა BitBlogs-ზე",
          subtitle: "შეიყვანეთ თქვენი აკრედიტაციები, რათა შეხვიდეთ თქვენს ანგარიშში",
          emailLabel: "ელ. ფოსტა",
          emailPlaceholder: "john@example.com",
          passwordLabel: "პაროლი",
          passwordPlaceholder: "შეიყვანეთ თქვენი პაროლი",
          signInButton: "შესვლა",
          forgotPassword: "დაგავიწყდათ პაროლი?",
          noAccount: "არ გაქვთ ანგარიში?",
          signUpLink: "რეგისტრაცია"
        }
      },
      
      
    },
  },
  lng: storedLanguage, 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
