import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1️⃣",
    title: "과정 신청",
    description: "관심 있는 자격증 과정을 신청합니다.",
  },
  {
    number: "2️⃣",
    title: "교육 이수",
    description: "이론과 실습으로 구성된 교육을 이수합니다.",
  },
  {
    number: "3️⃣",
    title: "과제 및 실습 수행",
    description: "현장 기반 과제와 실습을 수행합니다.",
  },
  {
    number: "4️⃣",
    title: "평가 및 수료",
    description: "제출된 과제와 실습 결과를 평가합니다.",
  },
  {
    number: "5️⃣",
    title: "자격증 발급",
    description: "평가 통과 후 공식 자격증이 발급됩니다.",
  },
];

const notes = [
  {
    title: "실습·과제 중심",
    content: "모든 과정은 이론 강의가 아닌 실제 현장에서 적용 가능한 실습과 과제 중심으로 운영됩니다.",
  },
  {
    title: "현장 적용 가능",
    content: "수료 후 바로 복지관, 학교, 지역사회 등에서 활용할 수 있는 실전 역량을 갖추게 됩니다.",
  },
  {
    title: "지속 지원",
    content: "자격증 취득 후에도 스마택트 교육·프로젝트 연계 기능이 제공됩니다.",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            취득 절차 안내
          </h1>
          <p className="text-xl text-teal-100">
            스마택트 자격증까지의 5단계 여정
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card className="h-full">
                  <CardContent className="pt-6 pb-6 text-center">
                    <span className="text-4xl block mb-4">{step.number}</span>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-teal-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            참고사항
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {notes.map((note, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {note.title}
                      </h3>
                      <p className="text-sm text-gray-600">{note.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            자격증 취득을 위한 첫 걸음을 내딛으세요.
          </p>
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">
              수강 문의하기
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
