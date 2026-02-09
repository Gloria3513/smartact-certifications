import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    number: "①",
    title: "현장 중심 설계",
    description: "강의실이 아닌 복지관·학교·마을·기관 기준",
    details: "실제 수업·프로그램에 바로 적용 가능",
  },
  {
    number: "②",
    title: "사람 중심 디지털",
    description: "기술 설명 ❌",
    details: "정서·관계·자존감·참여를 고려한 교육 설계",
  },
  {
    number: "③",
    title: "결과물이 남는 교육",
    description: "수업안, 콘텐츠, 영상, 자동화 시스템 등",
    details: "'이력으로 남는 결과물' 제작",
  },
];

const questions = [
  {
    q: "이 기술은 누구의 삶에 도움이 되는가?",
  },
  {
    q: "교육 현장에서 어떻게 쓰일 수 있는가?",
  },
  {
    q: "취약계층·지역사회·교육 현장과 연결되는가?",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            스마택트 자격증은<br />왜 다를까요?
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            스마택트의 자격증은
            <br />
            단순한 기술 습득이나 시험 통과를 목표로 하지 않습니다.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <p className="text-xl text-gray-900 font-medium mb-6">우리는 묻습니다.</p>
            <ul className="space-y-4">
              {questions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-lg text-gray-700 pt-1">{item.q}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            그래서 스마택트 자격증은
            <br />
            <strong className="text-teal-700">모두 '현장 문제 해결'을 중심으로 설계</strong>되었습니다.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            스마택트 자격증 공통 특징
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="pt-8">
                  <span className="text-4xl font-bold text-teal-600 mb-4 block">
                    {feature.number}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{feature.description}</p>
                  <p className="text-sm text-gray-500">{feature.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            기술을 가르치지 않습니다.
            <br />
            사람이 기술을 통해 살아갈 수 있게 돕습니다.
          </h2>
          <p className="text-lg text-gray-600">
            스마택트 자격증과 함께
            <br />
            사람 중심의 디지털 교육을 시작해보세요.
          </p>
        </div>
      </section>
    </div>
  );
}
