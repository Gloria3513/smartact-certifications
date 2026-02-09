import Link from "next/link";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "디지털 격차 해소",
    description: "디지털 기술에 소외된 계층 없이 모두가 기술의 혜택을 누릴 수 있도록 돕습니다.",
  },
  {
    title: "교육 현장 혁신",
    description: "AI와 디지털 기술을 활용해 교육 현장의 효율과 질을 높입니다.",
  },
  {
    title: "사람 중심 기술",
    description: "기술이 사람을 위해 존재함을 잊지 않고, 사람 중심의 사용을 지향합니다.",
  },
];

const history = [
  {
    year: "2024",
    title: "스마택트 설립",
    description: "디지털 격차 해소와 교육 현장 혁신을 목표로 활동 시작",
  },
  {
    year: "2025",
    title: "자격증 과정 개발",
    description: "현장 중심의 5종 자격증 과정 개발 및 운영 시작",
  },
];

export default function SmartactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            스마택트는
          </h1>
        </div>
      </section>

      {/* Message */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-8">
            우리는 기술을 가르치지 않습니다.
            <br />
            사람이 기술을 통해 살아갈 수 있게 돕습니다.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            스마택트는
            <br />
            디지털 격차 해소, 교육 현장 혁신,
            <br />
            사람 중심 기술 활용을 목표로 활동하는
            <br />
            <strong className="text-teal-700">교육·에듀테크 기반 조직</strong>입니다.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            우리가 추구하는 가치
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            우리의 여정
          </h2>
          <div className="space-y-8">
            {history.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="text-3xl font-bold text-teal-600">{item.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            함께할 준비가 되셨나요?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            스마택트의 미션에 공감하신다면
            <br />
            자격증 과정을 통해 함께해 주세요.
          </p>
          <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
            <Link href="/contact">
              자격증 과정 문의하기
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
