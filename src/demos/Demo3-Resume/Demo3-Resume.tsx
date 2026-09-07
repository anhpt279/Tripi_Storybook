import React, { useState, useEffect } from 'react';
import { Upload } from 'lucide-react';
import {
  TopNav,
  PageContainer,
  PageHeaderWrapper,
  Typography,
  Button,
  Alert,
  AlertDescription,
  Popconfirm,
  Modal,
  FileUpload,
  Textarea
} from '../../components/ui';

// Implementation note
import { useResumeData } from './hooks/useResumeData';
import { initialResumeData } from './types';
import { BasicInfoSection } from './sections/BasicInfoSection';
import { WorkExperienceSection } from './sections/WorkExperienceSection';
import { ProjectExperienceSection } from './sections/ProjectExperienceSection';
import { EducationSection } from './sections/EducationSection';
import { QualificationsSection } from './sections/QualificationsSection';
import { SkillsSection } from './sections/SkillsSection';
import { ResumeFormSection } from './components';

export const Demo3Resume: React.FC = () => {
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [showPrivacyAlert, setShowPrivacyAlert] = useState(true);

  // Implementation notebodyNo items yet. Add one to get started.
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Implementation note hook
  const {
    resumeData,
    newlyAddedIds,
    deletingIds,
    updateBasicInfo,
    addItem,
    updateItem,
    removeItem,
    hasItemContent,
    updateInterestSkill,
    updateWorkSkill,
    updateSelfEvaluation,
    saveResumeData
  } = useResumeData(initialResumeData);

  const handleSave = () => {
    saveResumeData();
    // Implementation note
  };

  const handleUploadResume = (file: File | null) => {
    if (file) {
      console.log('Action triggered:', file);
      setShowUploadDialog(false);
      // Implementation note
    }
  };

  const handleConfirmUpload = () => {
    setShowUploadDialog(true);
  };

  // Implementation note
  const handleHelpClick = () => {
    console.log('Action triggered');
  };

  const handleAvatarClick = () => {
    console.log('Action triggered');
  };

  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Documentation */}
      <TopNav
        isLoggedIn={true}
        userName="shadcn"
        avatarFallback="CN"
        onHelpClick={handleHelpClick}
        onAvatarClick={handleAvatarClick}
        onLogoClick={handleLogoClick}
      />
      
      {/* Documentation */}
      <div className="flex-1 overflow-auto">
        <PageContainer variant="centered" padding="nav-layout">
        {/* Documentation */}
        <PageHeaderWrapper
          variant="title-with-actions"
          title="Resume editor"
          actions={
            <div className="flex gap-2">
              <Popconfirm
                description="Upload a PDF resume to prefill your profile."
                onConfirm={handleConfirmUpload}
                confirmText="Are you sure you want to remove this item?"
                cancelText="Cancel"
              >
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Upload resume
                </Button>
              </Popconfirm>
              <Button onClick={handleSave}>
                Save
              </Button>
            </div>
          }
        />

        {/* Documentation */}
        {showPrivacyAlert && (
          <div className="mb-6">
            <Alert 
              variant="info" 
              showIcon 
              closable 
              onClose={() => setShowPrivacyAlert(false)}
            >
              <AlertDescription>
                Your profile is private and will not be shared without your permission.
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Documentation */}
        <div className="space-y-10">
          {/* Documentation */}
          <BasicInfoSection
            data={resumeData.basicInfo}
            onUpdate={updateBasicInfo}
          />

          {/* Documentation */}
          <div>
            <div className="mb-6">
              <Typography variant="h2">Experience and education</Typography>
            </div>
            
            {/* Documentation */}
            <WorkExperienceSection
              items={resumeData.workExperiences}
              onAdd={addItem}
              onUpdate={updateItem}
              onRemove={removeItem}
              hasItemContent={hasItemContent}
              newlyAddedIds={newlyAddedIds}
              deletingIds={deletingIds}
            />

            {/* Documentation */}
            <ProjectExperienceSection
              items={resumeData.projectExperiences}
              onAdd={addItem}
              onUpdate={updateItem}
              onRemove={removeItem}
              hasItemContent={hasItemContent}
              newlyAddedIds={newlyAddedIds}
              deletingIds={deletingIds}
            />

            {/* Documentation */}
            <EducationSection
              items={resumeData.educations}
              onAdd={addItem}
              onUpdate={updateItem}
              onRemove={removeItem}
              hasItemContent={hasItemContent}
              newlyAddedIds={newlyAddedIds}
              deletingIds={deletingIds}
            />
          </div>

          {/* Documentation */}
          <QualificationsSection
            awards={resumeData.awards}
            papers={resumeData.papers}
            repositories={resumeData.repositories}
            patents={resumeData.patents}
            socialMedia={resumeData.socialMedia}
            onAdd={addItem}
            onUpdate={updateItem}
            onRemove={removeItem}
            hasItemContent={hasItemContent}
            newlyAddedIds={newlyAddedIds}
            deletingIds={deletingIds}
          />

          {/* Documentation */}
          <SkillsSection
            interestSkillData={resumeData.interestSkill}
            workSkillData={resumeData.workSkill}
            onUpdateInterestSkill={updateInterestSkill}
            onUpdateWorkSkill={updateWorkSkill}
          />

          {/* Documentation */}
          <ResumeFormSection title="Additional information">
            <Textarea
              value={resumeData.selfEvaluation}
              onChange={(e) => updateSelfEvaluation(e.target.value)}
              placeholder="Write a short professional summary..."
              rows={6}
            />
          </ResumeFormSection>
        </div>
        </PageContainer>
      </div>

      {/* Documentation */}
      <Modal 
        open={showUploadDialog} 
        onOpenChange={setShowUploadDialog}
        title="Upload resume"
        size="sm"
      >
        <FileUpload
          variant="dropzone"
          accept=".pdf"
          maxSize={20 * 1024 * 1024} // 20MB
          placeholder="Drop a PDF here or choose a file"
          onFileSelect={handleUploadResume}
        />
      </Modal>
    </div>
  );
}; 