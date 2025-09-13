import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  Brain, 
  CheckCircle2, 
  Loader2,
  File,
  Image,
  FileSpreadsheet
} from "lucide-react";

export const DocumentProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileUpload = async () => {
    setIsProcessing(true);
    setProgress(0);
    
    // Simulate processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Intelligent <span className="bg-gradient-primary bg-clip-text text-transparent">Document Processing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload any document and let our AI extract key concepts, generate summaries, and create personalized study materials.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Area */}
            <Card className="shadow-card hover:shadow-elevated transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Upload className="h-5 w-5 mr-2 text-primary" />
                  Upload Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-smooth">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium mb-2">Drop files here or click to browse</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Supports PDF, DOCX, TXT, and more
                  </p>
                  <Button 
                    onClick={handleFileUpload}
                    disabled={isProcessing}
                    className="bg-gradient-primary hover:opacity-90 transition-smooth"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Select Files
                      </>
                    )}
                  </Button>
                </div>
                
                {isProcessing && (
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Processing document...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* AI Processing Features */}
            <Card className="shadow-card hover:shadow-elevated transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Brain className="h-5 w-5 mr-2 text-accent" />
                  AI Processing Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <div>
                      <p className="font-medium">Smart Content Extraction</p>
                      <p className="text-sm text-muted-foreground">Extract key concepts and topics</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <div>
                      <p className="font-medium">Automatic Summarization</p>
                      <p className="text-sm text-muted-foreground">Generate concise summaries</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <div>
                      <p className="font-medium">Question Generation</p>
                      <p className="text-sm text-muted-foreground">Create study questions automatically</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <div>
                      <p className="font-medium">Difficulty Assessment</p>
                      <p className="text-sm text-muted-foreground">Analyze content complexity</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium mb-3">Supported File Types</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex items-center space-x-2">
                      <File className="h-4 w-4 text-primary" />
                      <span className="text-sm">PDF</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-accent" />
                      <span className="text-sm">DOCX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileSpreadsheet className="h-4 w-4 text-info" />
                      <span className="text-sm">TXT</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};