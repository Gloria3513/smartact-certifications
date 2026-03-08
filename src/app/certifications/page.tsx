import Link from "next/link";
import { ArrowRight, Target, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getCertificationPrograms,
  type CertificationProgram,
} from "@/lib/supabase";

// 빌드 시 하드코딩 데이터를 폴백으로 사용
const fallbackCertifications = [
  {
    id: "fallback-1",
    slug: "edutech",
    step_number: 1,
    step_label: "기초",
    title: "에듀테크활용지도전문가",
    subtitle: "(EdTech Utilization Instructor)",
    tagline:
      "'도구를 아는 사람'이 아니라 '교육 목적에 맞게 기술을 선택할 수 있는 사람'",
    description: "이 과정은 모든 스마택트 교육의 기초이자 출발점입니다.",
    icon: "🎯",
    color: "from-blue-500 to-blue-600",
    necessity: [
      "에듀테크 도구는 넘쳐나지만, 무엇을 써야 할지 모르는 현장",
      "기술이 수업을 방해하는 역설",
      "'AI는 좋은데, 수업엔 어떻게 쓰지?'라는 혼란",
    ],
    necessity_title: "에듀테크활용지도전문가는",
    necessity_conclusion:
      "기술 과잉의 시대에서 '선별과 판단'을 담당하는 교육전문가입니다.",
    perspectives: [
      "기술보다 교육 목적이 먼저",
      "유행보다 현장 적합성이 우선",
      "도구 사용법보다 수업 설계 능력 강화",
    ],
    roles: null,
    competencies: null,
    contents: [
      "에듀테크와 AI 환경 이해",
      "교육 목적에 따른 도구 선택 기준",
      "수업 흐름에 맞는 에듀테크 활용 설계",
      "실제 교육 사례 분석 및 재구성",
    ],
    growth: [
      "새로운 도구 앞에서 흔들리지 않는 교육전문가",
      "'이건 우리 수업에 안 맞아요'라고 말할 수 있는 판단력",
      "에듀테크를 교육의 보조자로 활용하는 설계전문가",
    ],
    fields: [
      "평생교육·마을교육",
      "학교·기관 에듀테크 기초 과정",
      "강사 역량 강화 교육",
    ],
    price: null,
    duration_weeks: null,
    is_active: true,
    sort_order: 1,
  },
];

async function getCertifications(): Promise<CertificationProgram[]> {
  try {
    const programs = await getCertificationPrograms();
    if (programs.length > 0) return programs;
    return fallbackCertifications as CertificationProgram[];
  } catch {
    return fallbackCertifications as CertificationProgram[];
  }
}

export default async function CertificationsPage() {
  const certifications = await getCertifications();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-4">
            기초 → 비판 → 체험 → 생활 → 설계
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            자격증 과정 5종
          </h1>
          <p className="text-xl text-teal-100">
            사람을 중심에 둔 디지털 전환 교육 체계
          </p>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {certifications.map((cert) => (
            <div key={cert.slug} className="scroll-mt-20" id={cert.slug}>
              {/* Step Badge */}
              <div className="flex justify-center mb-6">
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {cert.step_number}️⃣ {cert.step_label}
                </span>
              </div>

              {/* Main Card */}
              <Link href={`/certifications/${cert.slug}`}>
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${cert.color} text-white p-8 md:p-10`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <span className="text-6xl">{cert.icon}</span>
                      <div className="flex-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                          {cert.title}
                        </h2>
                        <p className="text-white/80 text-sm mb-3">
                          {cert.subtitle}
                        </p>
                        <p className="text-lg font-medium">{cert.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 space-y-10">
                    {/* Description */}
                    <p className="text-gray-700 text-lg">{cert.description}</p>

                    {/* Social Necessity */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        사회적 필요성
                      </h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <ul className="space-y-2 mb-4">
                          {cert.necessity.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 flex items-start gap-2"
                            >
                              <span className="text-teal-500 mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-lg font-semibold text-gray-900">
                          {cert.necessity_title}
                        </p>
                        <p className="text-lg text-teal-700 font-medium">
                          {cert.necessity_conclusion}
                        </p>
                      </div>
                    </div>

                    {/* Perspectives */}
                    {cert.perspectives && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          핵심 교육 관점
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          {cert.perspectives.map((perspective, idx) => (
                            <div
                              key={idx}
                              className="bg-teal-50 rounded-lg p-4"
                            >
                              <p className="text-gray-800 font-medium">
                                {perspective}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Roles */}
                    {cert.roles && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          핵심 역할
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {cert.roles.map((role, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 rounded-xl p-6"
                            >
                              <h4 className="font-semibold text-gray-900 mb-3">
                                {role.title}
                              </h4>
                              <ul className="space-y-2">
                                {role.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="text-gray-700 text-sm flex items-start gap-2"
                                  >
                                    <span className="text-teal-500 mt-1">
                                      •
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Competencies */}
                    {cert.competencies && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          핵심 역량 구성
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          {cert.competencies.map((competency, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 rounded-xl p-6"
                            >
                              <h4 className="font-semibold text-gray-900 mb-3">
                                {competency.title}
                              </h4>
                              <ul className="space-y-2">
                                {competency.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="text-gray-700 text-sm flex items-start gap-2"
                                  >
                                    <span className="text-teal-500 mt-1">
                                      •
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contents */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-teal-600" />
                        주요 학습 내용
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {cert.contents.map((content, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg"
                          >
                            <span className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-gray-700">{content}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Growth */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-teal-600" />
                        수료 후 성장 모습
                      </h3>
                      <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
                        <ul className="space-y-3">
                          {cert.growth.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 flex items-start gap-3"
                            >
                              <span className="text-teal-600 text-xl">
                                &#10003;
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Fields */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-teal-600" />
                        활용 분야
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cert.fields.map((field, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm"
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            어떤 과정부터 시작하시겠습니까?
          </h2>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">
              수강 신청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
