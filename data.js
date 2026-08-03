const siteData = {
  services: [
    {
      title: 'التخطيط والتصميم',
      description: 'مقترحات تصميم أولية، رسومات تنفيذية، ومراجعة متطلبات الموقع والوظيفة بما يحقق وضوحًا في القرار.',
      benefits: ['تصميم أولي', 'تنسيق معماري', 'مراجعة الموقع'],
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'الهندسة الإنشائية',
      description: 'تحليل هيكلي، تصميم عناصر الإنشاء، ومراجعة المتطلبات التنفيذية بما يضمن الالتزام بالأداء والجدوى.',
      benefits: ['تحليل هيكلي', 'مراجعة التنفيذ', 'التوافق مع المعايير'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'
    },
    {
      title: 'الإشراف وإدارة المشروع',
      description: 'تنسيق بين الفريق الهندسي والمقاول، ومتابعة الجدول والميزانية وجودة التنفيذ طوال مراحل المشروع.',
      benefits: ['متابعة التنفيذ', 'تنسيق بين الفرق', 'الالتزام بالجدول'],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80'
    }
  ],
  projects: [
    { title: 'فيلا بحرية', location: 'دبي', year: '2025', client: 'مطور خاص', category: 'سكني', description: 'مشروع سكني مكوّن من طابقين مع تنظيم داخلي واضح ومرافق مستقلة.', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80' },
    { title: 'مركز طبي', location: 'أبوظبي', year: '2024', client: 'مؤسسة صحية', category: 'صحي', description: 'مركز طبي مُصمم وفق تسلسل وظيفي واضح ومناطق خدمة مرنة.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80' },
    { title: 'مدرسة تعليمية', location: 'الرياض', year: '2023', client: 'مؤسسة تعليمية', category: 'تعليمي', description: 'مبنى تعليمي يوازن بين الاستخدام الوظيفي والراحة البصرية والتهوية الطبيعية.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80' },
    { title: 'برج إداري', location: 'الدوحة', year: '2022', client: 'مستثمر تجاري', category: 'تجاري', description: 'برج إداري يتميز بمرونة الاستخدام، كفاءة التشغيل، ووضوح الحركة الداخلية.', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80' },
    { title: 'مسجد حضاري', location: 'جدة', year: '2022', client: 'مؤسسة خيرية', category: 'مرافق عامة', description: 'مسجد يتضمن خطة تشغيل واضحة، صوتيات مناسبة، وتفاصيل معمارية متقنة.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80' },
    { title: 'مصنع لوجستي', location: 'مسقط', year: '2021', client: 'مجموعة صناعية', category: 'صناعي', description: 'مصنع يدعم الكفاءة التشغيلية والتخزين المنظم مع مرونة في التوسعة.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80' }
  ],
  stats: [
    { value: '120+', label: 'مشروعًا منجزًا' },
    { value: '25', label: 'سنة خبرة' },
    { value: '98%', label: 'رضا العملاء' },
    { value: 'مستمرة', label: 'متابعة المشروع' }
  ],
  testimonials: [
    { quote: 'كان التركيز على التفاصيل والتنظيم واضحًا من أول يوم، واحتفظنا بالجدول والوضوح طوال المشروع.', author: 'ندى المولى', role: 'مطور عقاري' },
    { quote: 'أعطونا حلولًا عملية ومقبولة من الناحية الفنية دون إغفال الجوانب الإدارية.', author: 'عمر حداد', role: 'مدير مشروع صحي' },
    { quote: 'تميزوا بالوضوح في التواصل، والالتزام بالنتائج التشغيلية على أرض الواقع.', author: 'مينا يوسف', role: 'مستثمر' }
  ],
  gallery: [
    { title: 'مكتب إداري', category: 'إداري', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80' },
    { title: 'فناء تعليمي', category: 'تعليمي', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
    { title: 'مسكن خاص', category: 'سكني', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80' },
    { title: 'مرافق صحية', category: 'صحي', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=900&q=80' },
    { title: 'ممر دراسي', category: 'تعليمي', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80' },
    { title: 'محطة نقل', category: 'بنية تحتية', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' }
  ],
  blog: [
    { title: 'كيف نحافظ على الجودة خلال مراحل التنفيذ السريعة', summary: 'إطار عملي للحفاظ على المعايير الفنية عند ضغط الجداول والتعديلات.', author: 'رنا السعيد', readTime: '6 دقائق', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80' },
    { title: 'التنسيق بين التصميم والتشغيل في المشاريع العامة', summary: 'كيف ينعكس التخطيط المبكر على الكفاءة التشغيلية لاحقًا.', author: 'حسن كريم', readTime: '5 دقائق', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80' },
    { title: 'أهمية الإشراف الهندسي في المشاريع الخاصة', summary: 'لماذا يخفّض الإشراف المبكر من التعديلات ويُحسّن جودة التسليم.', author: 'ليلى نور', readTime: '7 دقائق', image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80' }
  ],
  team: [
    { name: 'نور حداد', role: 'مدير التصميم', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80' },
    { name: 'سامي مالك', role: 'مدير الهندسة الإنشائية', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80' },
    { name: 'ليلى رحمن', role: 'مديرة التنفيذ', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80' }
  ]
};
