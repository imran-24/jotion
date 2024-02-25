'use client'

 import { Toolbar } from "@/components/toolbar";
// import { Cover } from "@/components/cover";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps{
    params:{
        documentId: Id<"documents">
    }
}



const DocumentIdPage = ({params}: DocumentIdPageProps) => {
    
    const Editor = useMemo(()=> dynamic(()=> import("@/components/editor"), {ssr: false}), [])
    const update = useMutation(api.documents.update);

    const onChange = (content: string) => {
        update({
            id: params.documentId,
            content
        })
    } 

    const document = useQuery(api.documents.getById, {
        documentId: params.documentId
    });

    if (document === undefined) {
        return (
          <div>
            Loading
          </div>
        );
      }
    
    if (document === null) {
        return <div>Not found</div>
    }

    return ( 
        <div className="pb-40">
            {/* <Cover url={document.coverImage} /> */}
            <div className="h-[40vh]" />
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar 
                preview
                initialData={document} />
                {/* <Editor
                onChange={onChange}
                initialContent={document.content}
                /> */}
                <Editor 
                editable={false}
                onChange={onChange}
                initialContent={document.content}
                />
            </div>
        </div>
     );
}
 
export default DocumentIdPage;