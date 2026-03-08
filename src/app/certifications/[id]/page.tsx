import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BookOpen, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getCertificationPrograms,
  getCertificationBySlug,
  type CertificationProgram,
} from "@/lib/supabase";

// 폴백 데이터 (Supabase 미연결 시)
const fallbackSlugs = [
  "edutech",
  "digital-media",
  "metaverse-ethics",
  "smart-device",
  "ai-agent",
];

export async function generateStaticParams() {
  try {
    const programs = await getCertificationPrograms();
    if (programs.length > 0) {
      return programs.map((p) => ({ id: p.slug }));
    }
  } catch {
    // fallback
  }
  return fallbackSlugs.map((id) => ({ id }));
}

async function getCert(
  slug: string
): Promise<CertificationProgram | null> {
  try {
    const cert = await getCertificationBySlug(slug);
    return cert;
  } catch {
    return null;
  }
}

export default async function CertificationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cert = await getCert(id);

  if (!cert) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <Link
            href="/certifications"
            className="inline-flex items-center text-sm text-gray-600 hover:text-teal-600"
          >
            &larr; 자격증 과정 목록으로
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section
        className={`bg-gradient-to-r ${cert.color} text-white py-16 px-4`}
      >
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
            {cert.step_number}️⃣ {cert.step_label}
          </span>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{cert.icon}</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">
                {cert.title}
              </h1>
              <p className="text-white/80 text-sm">{cert.subtitle}</p>
            </div>
          </div>
          <p className="text-xl font-medium bg-white/10 rounded-xl p-4">
            {cert.tagline}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed">
            {cert.description}
          </p>

          {/* Social Necessity */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                사회적 필요성
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3 mb-6">
                  {cert.necessity.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <span className="text-teal-500 mt-1">&bull;</span>
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
            </CardContent>
          </Card>

          {/* Perspectives */}
          {cert.perspectives && (
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  핵심 교육 관점
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {cert.perspectives.map((perspective, idx) => (
                    <div key={idx} className="bg-teal-50 rounded-lg p-4">
                      <p className="text-gray-800 font-medium">{perspective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Roles */}
          {cert.roles && (
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  핵심 역할
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {cert.roles.map(
                    (
                      role: { title: string; items: string[] },
                      idx: number
                    ) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          {role.title}
                        </h3>
                        <ul className="space-y-2">
                          {role.items.map((item: string, i: number) => (
                            <li
                              key={i}
                              className="text-gray-700 text-sm flex items-start gap-2"
                            >
                              <span className="text-teal-500 mt-1">
                                &bull;
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Competencies */}
          {cert.competencies && (
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  핵심 역량 구성
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {cert.competencies.map(
                    (
                      competency: { title: string; items: string[] },
                      idx: number
                    ) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-semibold text-gray-900 mb-3">
                          {competency.title}
                        </h3>
                        <ul className="space-y-2">
                          {competency.items.map((item: string, i: number) => (
                            <li
                              key={i}
                              className="text-gray-700 text-sm flex items-start gap-2"
                            >
                              <span className="text-teal-500 mt-1">
                                &bull;
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Contents */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-teal-600" />
                주요 학습 내용
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cert.contents.map((content, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg"
                  >
                    <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700">{content}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Growth */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-teal-600" />
                수료 후 성장 모습
              </h2>
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
                <ul className="space-y-4">
                  {cert.growth.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <span className="text-teal-600 text-xl">&#10003;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Fields */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-teal-600" />
                활용 분야
              </h2>
              <div className="flex flex-wrap gap-3">
                {cert.fields.map((field, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-800 px-5 py-3 rounded-full text-base"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {cert.title} 과정에 참여해보세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            사람 중심의 디지털 교육전문가로 성장할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700"
            >
              <Link href="/contact">
                수강 신청하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/certifications">다른 과정 보기</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
