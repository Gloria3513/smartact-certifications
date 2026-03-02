import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "기술을 따라잡는 교육이 아니라",
    description: "사람이 기술 속에서 길을 잃지 않도록 돕는 교육입니다.",
  },
  {
    title: "이해·비판·설계·중재",
    description: "더 많은 기술보다 이해·비판·설계·중재할 수 있는 교육전문가가 필요합니다.",
  },
  {
    title: "단계적 구조",
    description: "기초 → 비판 → 체험 → 생활 → 설계로 이어지는 사람 중심 디지털 교육의 구조입니다.",
  },
];

const principles = [
  {
    title: "사람 중심",
    content: "기술이 사람을 위해 존재함을 잊지 않습니다.",
  },
  {
    title: "현장 중심",
    content: "강의실이 아닌 복지관·학교·마을·기관 기준으로 설계합니다.",
  },
  {
    title: "실전 중심",
    content: "수업안, 콘텐츠, 영상, 자동화 시스템 등 결과물이 남는 교육입니다.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            스마택트 교육 체계
          </h1>
          <p className="text-xl text-teal-100">
            사람을 중심에 둔 디지털 전환 교육
          </p>
        </div>
      </section>

      {/* Declaration */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              스마택트 교육 체계 선언문
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              스마택트의 교육 과정은
              <br />
              기술을 따라잡는 교육이 아니라,
              <br />
              <strong className="text-teal-700">사람이 기술 속에서 길을 잃지 않도록 돕는 교육</strong>입니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              디지털 전환, AI 확산, 미디어 환경 변화 속에서
              <br />
              우리는 더 많은 기술보다
              <br />
              <strong className="text-teal-700">이해·비판·설계·중재할 수 있는 교육전문가</strong>가 필요하다고 믿습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              스마택트의 5가지 과정은
              <br />
              <strong className="text-teal-700">기초 → 비판 → 체험 → 생활 → 설계</strong>로 이어지는
              <br />
              사람 중심 디지털 교육의 단계적 구조입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            스마택트 교육의 특징
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            교육 원칙
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-600">{principle.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            함께 성장할 준비가 되셨나요?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            스마택트 교육과 함께 사람 중심의 디지털 교육전문가가 되어보세요.
          </p>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/certifications">
              자격증 과정 보기
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
