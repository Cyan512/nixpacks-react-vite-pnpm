import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/shared/PageHero'
import { ArrowLeft, Share2, Printer, FileQuestion } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { PresentacionTab } from '@/components/shared/PresentacionTab'
import { MallaCurricularTab } from '@/components/shared/MallaCurricularTab'
import { InversionBecasTab } from '@/components/shared/InversionBecasTab'
import { LineasInvestigacionTab } from '@/components/shared/LineasInvestigacionTab'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import type { Programa } from '@/types'

const programsData: Record<string, Record<string, Programa>> = {
  maestrias: {
    'gestion-publica': {
      slug: 'gestion-publica',
      title: 'Maestría en Gestión Pública',
      facultad: 'Facultad de Ciencias Económicas',
      duration: '2 años',
      modality: 'Presencial',
      description: 'Formación especializada en administración y gestión de recursos públicos.',
      content: 'La Maestría en Gestión Pública está diseñada para profesionales que buscan desarrollar competencias en la administración eficiente de los recursos del Estado. El programa aborda temas como formulación de proyectos, presupuesto público, contrataciones del Estado y modernización de la gestión pública. Los egresados estarán capacitados para liderar procesos de transformación institucional en el sector público.',
      objetivo_general: 'Formar profesionales con competencias avanzadas en gestión pública, capaces de diseñar, implementar y evaluar políticas y proyectos públicos que contribuyan al desarrollo del país.',
      objetivos_especificos: 'Desarrollar habilidades en formulación de proyectos públicos.\nAdquirir conocimientos en presupuesto público y contrataciones.\nImplementar técnicas de modernización de la gestión pública.\nCapacitar para el liderazgo de procesos de transformación institucional.',
      perfil_egresado: 'Egresado con capacidad para liderar procesos de transformación institucional en el sector público, con conocimientos avanzados en gestión pública y habilidades para la formulación y evaluación de proyectos públicos.',
      cursos: [
        {
          nombre: 'Formulación de Proyectos Públicos',
          creditos: 4,
          categoria: 'Obligatorio',
          programaCurso: {
            semestre: 'I',
            costo_matricula: 1500,
            numero_matriculas: 30,
            costo_cuota: 800,
            numero_cuotas: 2,
          },
        },
        {
          nombre: 'Presupuesto Público',
          creditos: 3,
          categoria: 'Obligatorio',
          programaCurso: {
            semestre: 'I',
            costo_matricula: 1500,
            numero_matriculas: 30,
            costo_cuota: 800,
            numero_cuotas: 2,
          },
        },
        {
          nombre: 'Contrataciones del Estado',
          creditos: 4,
          categoria: 'Obligatorio',
          programaCurso: {
            semestre: 'II',
            costo_matricula: 1500,
            numero_matriculas: 30,
            costo_cuota: 800,
            numero_cuotas: 2,
          },
        },
        {
          nombre: 'Modernización de la Gestión Pública',
          creditos: 3,
          categoria: 'Optativo',
          programaCurso: {
            semestre: 'II',
            costo_matricula: 1500,
            numero_matriculas: 30,
            costo_cuota: 800,
            numero_cuotas: 2,
          },
        },
      ],
      lineas_investigacion: 'Gestión de políticas públicas.\nTransparencia y acceso a la información.\nInnovación en servicios públicos.',
      enConvocatoria: true,
    },
  },
}

export default function ProgramDetail() {
  const { tipo, slug } = useParams<{ tipo: string; slug: string }>()
  const program = tipo && slug ? programsData[tipo]?.[slug] : undefined

  if (!program) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <FileQuestion className="mx-auto h-16 w-16 text-muted/40" />
        <h1 className="mt-4 font-heading text-4xl font-light uppercase tracking-wide text-foreground sm:text-5xl">
          Programa no encontrado
        </h1>
        <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted-foreground">
          El programa que buscas no existe o ha sido eliminado.
        </p>
        <Button asChild className="mt-6">
          <Link
            to={`/${tipo}`}
            className="font-sans text-sm font-normal uppercase tracking-widest"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a programas
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <>
      <PageHero
        title={program.title}
        description={program.description}
        badges={[
          { label: program.duration },
          { label: program.modality, variant: 'outline' },
        ]}
      />
      <div className="w-full border-b border-border/40 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12">

          <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 h-fit">
            <Button variant="ghost" asChild className="group -ml-4 rounded-none hover:bg-transparent text-muted-foreground hover:text-foreground">
              <Link to={`/${tipo}`} className="inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                  Volver a programas
                </span>
              </Link>
            </Button>

            <div className="h-px bg-primary/10" />

            <div className="flex flex-col gap-3 pt-2">
              <button className="flex items-center gap-2 text-left font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group">
                <Share2 className="h-4 w-4 transition-colors group-hover:text-secondary" /> Compartir programa
              </button>
              <button onClick={() => window.print()} className="flex items-center gap-2 text-left font-sans text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group">
                <Printer className="h-4 w-4 transition-colors group-hover:text-secondary" /> Imprimir programa
              </button>
            </div>
          </aside>

          <main className="lg:col-span-9 lg:pl-8 border-t lg:border-t-0 lg:border-l border-primary/10 pt-8 lg:pt-0">
            {/* 🖥️ DESKTOP - TABS */}
            <div className="hidden md:block">
              <Tabs defaultValue="presentacion" className="w-full gap-8">
                <TabsList className="flex border-b border-primary/10 w-full bg-transparent p-0 gap-0 rounded-none">
                  <TabsTrigger value="presentacion" className='group-data-[variant=default]/tabs-list:data-active:shadow-none'>Presentación</TabsTrigger>
                  <TabsTrigger value="malla" className='group-data-[variant=default]/tabs-list:data-active:shadow-none'>Malla Curricular</TabsTrigger>
                  <TabsTrigger value="inversion" className='group-data-[variant=default]/tabs-list:data-active:shadow-none'>Inversión y Becas</TabsTrigger>
                  <TabsTrigger value="lineas" className='group-data-[variant=default]/tabs-list:data-active:shadow-none'>Líneas de Investigación</TabsTrigger>
                </TabsList>

                <TabsContent value="presentacion">
                  <PresentacionTab programa={program} />
                </TabsContent>

                <TabsContent value="malla">
                  {program.cursos && <MallaCurricularTab cursos={program.cursos} />}
                </TabsContent>

                <TabsContent value="inversion">
                  {program.cursos && (
                    <InversionBecasTab
                      cursos={program.cursos}
                      modalidad={program.modality}
                    />
                  )}
                </TabsContent>

                <TabsContent value="lineas">
                  {program.lineas_investigacion && (
                    <LineasInvestigacionTab programa={program} />
                  )}
                </TabsContent>
              </Tabs>
            </div>

            {/* 📱 MOBILE - ACCORDION */}
            <div className="block md:hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="presentacion">
                  <AccordionTrigger>Presentación</AccordionTrigger>
                  <AccordionContent>
                    <PresentacionTab programa={program} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="malla">
                  <AccordionTrigger>Malla Curricular</AccordionTrigger>
                  <AccordionContent>
                    {program.cursos && <MallaCurricularTab cursos={program.cursos} />}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="inversion">
                  <AccordionTrigger>Inversión y Becas</AccordionTrigger>
                  <AccordionContent>
                    {program.cursos && (
                      <InversionBecasTab
                        cursos={program.cursos}
                        modalidad={program.modality}
                      />
                    )}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="lineas">
                  <AccordionTrigger>Líneas de Investigación</AccordionTrigger>
                  <AccordionContent>
                    {program.lineas_investigacion && (
                      <LineasInvestigacionTab programa={program} />
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}