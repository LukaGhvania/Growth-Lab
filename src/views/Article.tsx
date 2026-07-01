import React from 'react';
import { useStore } from '../store';
import { ArrowLeft, BookOpen, Sun, Leaf, Activity } from 'lucide-react';

export function Article() {
  const { setActiveView } = useStore();

  return (
    <div className="max-w-4xl mx-auto pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => setActiveView('learning')}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary mb-6 transition-colors font-semibold"
      >
        <ArrowLeft size={20} />
        უკან დაბრუნება
      </button>

      <div className="bg-surface-container-lowest rounded-3xl p-8 sm:p-12 soft-bloom border border-outline-variant">
        <h1 className="text-4xl font-display font-bold text-on-surface mb-4">
          ბიოლოგიის საფუძვლები: მცენარეთა სამყარო
        </h1>
        <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
          გაეცანით მცენარეების სასიცოცხლო პროცესებს, მათ ანატომიას და იმ საოცარ მექანიზმებს, რომლებითაც ისინი დედამიწაზე სიცოცხლეს უზრუნველყოფენ.
        </p>

        <div className="space-y-12">
          {/* General Biology */}
          <section className="scroll-mt-8">
            <div className="flex items-center gap-4 mb-4 text-primary">
              <BookOpen size={32} />
              <h2 className="text-2xl font-bold font-display text-on-surface">ბიოლოგიის ზოგადი მიმოხილვა</h2>
            </div>
            <div className="prose prose-lg text-on-surface-variant leading-relaxed">
              <p>
                ბიოლოგია არის მეცნიერება სიცოცხლისა და ცოცხალი ორგანიზმების შესახებ. იგი შეისწავლის მათ სტრუქტურას, ფუნქციებს, ზრდას, წარმოშობას, ევოლუციასა და გავრცელებას. ბიოლოგია გვეხმარება გავიგოთ, თუ როგორ მუშაობს ცოცხალი სამყარო და რა როლი აკისრია თითოეულ ორგანიზმს ეკოსისტემაში. მცენარეები (Plantae) ამ რთული ქსელის უმნიშვნელოვანესი ნაწილია — ისინი მზის ენერგიას ორგანულ ნივთიერებებად გარდაქმნიან და უზრუნველყოფენ ჟანგბადის გამომუშავებას, რაც აუცილებელია სხვა ცოცხალი არსებების, მათ შორის ადამიანების სიცოცხლისთვის.
              </p>
            </div>
          </section>

          {/* Photosynthesis */}
          <section className="scroll-mt-8">
            <div className="flex items-center gap-4 mb-4 text-amber-500">
              <Sun size={32} />
              <h2 className="text-2xl font-bold font-display text-on-surface">ფოტოსინთეზი</h2>
            </div>
            <div className="prose prose-lg text-on-surface-variant leading-relaxed">
              <p>
                ფოტოსინთეზი არის პროცესი, რომლის დროსაც მცენარეები, წყალმცენარეები და ზოგიერთი ბაქტერია მზის სინათლის ენერგიას იყენებენ ნახშირორჟანგისა (CO2) და წყლისგან (H2O) გლუკოზის (შაქრის) სინთეზისთვის. 
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>სინათლის ფაზა:</strong> მიმდინარეობს ქლოროპლასტებში. მზის ენერგია გამოიყენება წყლის მოლეკულების დასაშლელად, რის შედეგადაც გამოიყოფა ჟანგბადი.</li>
                <li><strong>ბნელი ფაზა (კალვინის ციკლი):</strong> მიმდინარეობს სინათლის გარეშეც. სინათლის ფაზაში დაგროვილი ენერგია გამოიყენება ნახშირორჟანგიდან გლუკოზის შესაქმნელად.</li>
              </ul>
              <p className="mt-4">
                ქლოროფილი არის პიგმენტი, რომელიც მცენარეს მწვანე ფერს აძლევს და შთანთქავს მზის სინათლეს.
              </p>
            </div>
          </section>

          {/* Plant Anatomy */}
          <section className="scroll-mt-8">
            <div className="flex items-center gap-4 mb-4 text-primary">
              <Leaf size={32} />
              <h2 className="text-2xl font-bold font-display text-on-surface">მცენარეთა ანატომია</h2>
            </div>
            <div className="prose prose-lg text-on-surface-variant leading-relaxed">
              <p>
                მცენარე შედგება რამდენიმე ძირითადი ორგანოსგან, რომელთაგან თითოეულს თავისი უნიკალური ფუნქცია აქვს:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>ფესვი:</strong> ამაგრებს მცენარეს ნიადაგში და იწოვს წყალსა და მინერალებს. ასევე მოქმედებს როგორც საკვების საცავი.</li>
                <li><strong>ღერო:</strong> წარმოადგენს საყრდენს მცენარისთვის. გადააქვს წყალი და მინერალები ფესვებიდან ფოთლებისკენ, ხოლო ფოთლებში წარმოქმნილი საკვები - მცენარის სხვა ნაწილებისკენ.</li>
                <li><strong>ფოთოლი:</strong> ფოტოსინთეზის მთავარი ორგანო. აქ ხდება მზის ენერგიის შთანთქმა და ნახშირორჟანგის ათვისება (სტომატების გავლით).</li>
                <li><strong>ყვავილი:</strong> მცენარის გამრავლების ორგანო. მისი მთავარი ფუნქციაა მწერების მიზიდვა მტვრიანობისთვის, რის შედეგადაც ვითარდება ნაყოფი და თესლი.</li>
              </ul>
            </div>
          </section>

          {/* Life Cycle */}
          <section className="scroll-mt-8">
            <div className="flex items-center gap-4 mb-4 text-secondary">
              <Activity size={32} />
              <h2 className="text-2xl font-bold font-display text-on-surface">სასიცოცხლო ციკლი</h2>
            </div>
            <div className="prose prose-lg text-on-surface-variant leading-relaxed">
              <p>
                მცენარის სიცოცხლე იწყება თესლით და სრულდება ახალი თესლის წარმოქმნით. ეს არის ციკლური პროცესი, რომელიც მოიცავს რამდენიმე ეტაპს:
              </p>
              <ol className="list-decimal pl-5 mt-4 space-y-2">
                <li><strong>აღმოცენება:</strong> შესაბამისი ტენიანობის, ტემპერატურისა და ჟანგბადის პირობებში თესლი იწყებს გაღვივებას. ჩნდება პირველი ფესვი და ღერო.</li>
                <li><strong>ვეგეტაციური ზრდა:</strong> მცენარე ინტენსიურად იზრდება, უვითარდება ფესვთა სისტემა, ღერო და ფოთლები. ამ პერიოდში იზრდება ფოტოსინთეზის ინტენსივობა.</li>
                <li><strong>ყვავილობა:</strong> მცენარე გადადის რეპროდუქციულ ფაზაში. ჩნდება ყვავილები, რაც აუცილებელია დამტვერვისთვის.</li>
                <li><strong>ნაყოფმსხმოიარობა:</strong> დამტვერვის შემდეგ ყვავილი გადაიქცევა ნაყოფად, რომელშიც მწიფდება ახალი თესლები.</li>
                <li><strong>დაბერება და სიკვდილი (ზოგიერთისთვის):</strong> ერთწლიანი მცენარეების სასიცოცხლო ციკლი სრულდება ნაყოფის მომწიფების შემდეგ, ხოლო მრავალწლიანი მცენარეები აგრძელებენ არსებობას წლების განმავლობაში.</li>
              </ol>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
