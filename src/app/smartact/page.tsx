import Link from "next/link";
import { Button } from "@/components/ui/button";

const values = [
  {
    title: "사람 중심",
    description: "기술이 사람을 위해 존재함을 잊지 않습니다.",
  },
  {
    title: "현장 중심",
    description: "강의실이 아닌 복지관·학교·마을·기관 기준으로 설계합니다.",
  },
  {
    title: "실전 중심",
    description: "수업안, 콘텐츠, 영상, 자동화 시스템 등 결과물이 남는 교육입니다.",
  },
];

const system = [
  {
    step: "기초",
    title: "에듀테크활용지도사",
    description: "교육 목적에 맞게 기술을 선택할 수 있는 사람",
  },
  {
    step: "비판",
    title: "디지털미디어교육",
    description: "미디어가 세상을 재현하는 방식을 비판적으로 읽는 힘",
  },
  {
    step: "체험",
    title: "메타버스·AI 윤리 체험지도사",
    description: "윤리를 체험과 선택의 문제로 다루는 교육자",
  },
  {
    step: "생활",
    title: "스마트디바이스활용지도사",
    description: "디지털 공포를 낮추고 삶과 연결하는 교육자",
  },
  {
    step: "설계",
    title: "AI 에이전트활용지도사",
    description: "AI와 사람 사이를 연결하는 시스템 설계자",
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

      {/* Declaration */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed mb-6">
              기술을 따라잡는 교육이 아니라,
              <br />
              사람이 기술 속에서 길을 잃지 않도록 돕는 교육
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              디지털 전환, AI 확산, 미디어 환경 변화 속에서
              <br />
              우리는 더 많은 기술보다
              <br />
              <strong className="text-teal-700">이해·비판·설계·중재할 수 있는 교육자</strong>가 필요합니다.
            </p>
          </div>
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

      {/* System Structure */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            단계적 교육 구조
          </h2>
          <p className="text-center text-gray-600 mb-12">
            기초 → 비판 → 체험 → 생활 → 설계
          </p>
          <div className="grid md:grid-cols-5 gap-4">
            {system.map((item, idx) => (
              <div key={idx} className="text-center">
                <span className="inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {item.step}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600">{item.description}</p>
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
            교육 과정을 통해 함께해 주세요.
          </p>
          <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
            <Link href="/certifications">
              자격증 과정 보기
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
