import React from "react";

const Svg = ({ children, className }) => {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
      {children}
    </svg>
  );
};

export const HeartIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </Svg>
  );
};

export const GithubIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </Svg>
  );
};

export const LinkedinIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </Svg>
  );
};

export const RefreshIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        fill-rule="evenodd"
        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
        clip-rule="evenodd"
      />
    </Svg>
  );
};

export const GameIcon = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
        clip-rule="evenodd"
      />
    </Svg>
  );
};

export const FireworksIcon = ({ className }) => {
  return (
    <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      enable-background="new 0 0 512.031 512.031"
      height="150"
      viewBox="0 0 512.031 512.031"
      width="150"
    >
      <g>
        <path d="m158.217 146.983c-7.693-7.694-20.818-4.881-24.651 5.339l-127.28 339.412c-4.509 12.023 7.266 23.831 19.312 19.312 17.047-6.393 325.733-122.15 339.411-127.279 10.173-3.814 13.073-16.919 5.34-24.651zm-4.742 37.685 61.641 61.641c4.265 51.261 23.255 100.54 54.22 141.294l-64.167 24.063c-47.996-49.926-72.49-119.728-65.966-188.939zm-40.442 261.549c-14.797-16.806-27.104-35.536-36.695-55.85l36.224-96.599c8.997 49.409 31.188 93.608 62.313 129.257zm-50.683-18.548c6.276 10.372 13.246 20.293 20.874 29.727l-37.261 13.973zm236.47-51.122c-22.496-27.37-38.643-59.564-47.307-93.841l81.15 81.15z" />
        <g>
          <path d="m353.839 280.165c5.858 5.858 15.355 5.858 21.213 0 56.432-56.432 111.381-38.985 111.93-38.803 7.859 2.619 16.354-1.628 18.974-9.487 2.621-7.857-1.628-16.354-9.487-18.974-2.958-.985-73.232-23.347-142.629 46.051-5.859 5.857-5.86 15.356-.001 21.213z" />
        </g>
        <path d="m237.166 163.492c5.857 5.858 15.355 5.859 21.213 0 69.397-69.397 47.036-139.671 46.051-142.629-2.62-7.859-11.116-12.108-18.974-9.487-7.859 2.62-12.106 11.115-9.487 18.974.183.549 17.629 55.498-38.803 111.93-5.858 5.857-5.858 15.355 0 21.212z" />
        <path d="m290.199 195.313c-5.858 5.858-5.858 15.355 0 21.213 5.804 5.805 15.235 5.881 21.124.089 7.749-3.861 31.801 10.621 45.168-2.741 13.223-13.224-.826-36.787 2.683-45.045 8.269-3.518 31.823 10.538 45.046-2.684 13.226-13.224-.824-36.787 2.685-45.046 8.281-3.519 31.822 10.539 45.045-2.684 13.226-13.224-.824-36.787 2.685-45.046 8.232-3.501 31.832 10.525 45.047-2.685 13.361-13.363-1.094-37.458 2.739-45.167 5.77-5.864 5.739-15.295-.089-21.124-5.857-5.858-15.355-5.858-21.213 0-11.823 11.823-9.51 28.514-7.283 40.447-11.933-2.227-28.623-4.54-40.446 7.282-11.823 11.823-9.51 28.514-7.283 40.447-11.933-2.226-28.625-4.541-40.447 7.283-11.823 11.823-9.509 28.514-7.282 40.447-11.935-2.227-28.625-4.541-40.447 7.282-11.823 11.823-9.51 28.514-7.283 40.447-11.934-2.225-28.628-4.538-40.449 7.285z" />
        <path d="m375.052 68.033c5.858-5.858 5.858-15.355 0-21.213s-15.355-5.858-21.213 0-5.858 15.355 0 21.213c5.857 5.858 15.355 5.858 21.213 0z" />
        <circle cx="470.511" cy="163.493" r="15" />
        <path d="m438.691 301.379c-5.858 5.858-5.858 15.355 0 21.213s15.355 5.858 21.213 0 5.858-15.355 0-21.213c-5.857-5.858-15.355-5.858-21.213 0z" />
        <path d="m226.559 89.246c5.858-5.858 5.858-15.355 0-21.213s-15.355-5.858-21.213 0c-5.858 5.857-5.858 15.355 0 21.213s15.356 5.858 21.213 0z" />
      </g>
    </svg>
    </div>
  );
};


export const GameOverIcon = ({className}) => {
  return (
    <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Capa_1"
      enable-background="new 0 0 508.717 508.717"
      height="180"
      viewBox="0 0 508.717 508.717"
      width="180"
    >
      <g>
        <g>
          <g>
            <path d="m480.837 20.886c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m491.012 36.407c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m483.879 43.54c0-1.68-1.362-3.042-3.042-3.042-.878 0-1.663.377-2.218.972-1.346-2.283-2.964-4.385-4.815-6.26.395-.513.639-1.148.639-1.845 0-1.68-1.362-3.042-3.042-3.042-.889 0-1.682.388-2.238.997-5.154-3.554-11.393-5.641-18.113-5.641h-393.383c-17.639 0-31.989 14.351-31.989 31.99v393.381c0 17.376 13.928 31.55 31.204 31.97-.221.421-.357.894-.357 1.402 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.133-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.347-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.133-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.346-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.501-.132-.965-.347-1.382h14.22c-.214.417-.346.881-.346 1.382 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-.571-.167-1.1-.441-1.557 13.734-1.432 24.905-11.591 27.869-24.817.959-.512 1.62-1.51 1.62-2.674 0-.853-.354-1.622-.92-2.175.047-.711.08-1.426.08-2.148v-13.199c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.543-.84-2.089v-15.433c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.543-.84-2.089v-15.433c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.543-.84-2.089v-15.433c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.543-.84-2.089v-15.433c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.433c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.543-.84-2.089v-15.433c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.433c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.434c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.427c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-15.433c.518-.545.84-1.278.84-2.089s-.322-1.544-.84-2.089v-3.394c0-3.904-.706-7.646-1.992-11.108 1.564-.109 2.816-1.412 2.816-3.019zm-8.84 407.51c0 3.924-.953 7.628-2.631 10.902-.317-.112-.652-.184-1.007-.184-1.68 0-3.042 1.362-3.042 3.042 0 .766.293 1.458.761 1.993-1.894 2.169-4.167 3.998-6.72 5.375-.361-.151-.758-.236-1.174-.236-1.291 0-2.387.807-2.829 1.941-2.317.747-4.785 1.155-7.347 1.155h-6.399c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.537c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.538c0-.018.006-.036.006-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-13.538c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.538c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.538c0-.018.006-.036.006-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-13.538c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-13.539c.001-.018.006-.036.006-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.538c0-.018.006-.036.006-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-13.538c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-13.538c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.538c0-.018.006-.036.006-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-13.538c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.538c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.538c.001-.018.006-.036.006-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-13.538c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.538c.001-.018.006-.036.006-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.005.055h-13.538c0-.018.006-.036.006-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-13.538c0-.018.005-.036.005-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-13.539c.001-.018.006-.036.006-.055 0-1.68-1.362-3.042-3.042-3.042s-3.042 1.362-3.042 3.042c0 .019.005.036.006.055h-8.3c-1.817 0-3.585-.21-5.287-.595-.256-1.421-1.492-2.502-2.987-2.502-.775 0-1.474.298-2.011.775-2.576-1.228-4.897-2.903-6.869-4.922 1.413-.262 2.485-1.497 2.485-2.986 0-1.68-1.362-3.042-3.042-3.042-1.227 0-2.278.73-2.759 1.776-2.231-3.642-3.519-7.92-3.519-12.495v-393.379c0-13.228 10.762-23.99 23.989-23.99h393.382c13.229 0 23.99 10.762 23.99 23.99z" />
            <path d="m491.012 56.018c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 75.629c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 95.24c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 114.851c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 134.462c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 154.073c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042c0 1.681 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 173.684c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 193.296c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 212.907c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 232.518c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 252.129c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 271.74c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 291.351c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 310.962c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 330.573c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042c0 1.681 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 350.184c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 369.796c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 389.407c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 409.018c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 428.629c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 448.24c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m491.012 467.851c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <circle cx="480.837" cy="474.984" r="3.042" />
            <path d="m471.4 16.796c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 26.97c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 40.498c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.681-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 56.018c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 60.109c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.681-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 75.629c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 79.72c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 95.24c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 99.331c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 114.851c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 118.942c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 134.462c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 138.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 154.073c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042c0 1.681 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 158.164c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 173.684c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 177.775c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 193.296c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 197.386c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 212.907c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 216.998c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 232.518c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 236.609c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.681-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 252.129c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 256.22c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.041 3.042 3.041 3.042-1.362 3.042-3.041c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 271.74c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 275.831c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 291.351c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 295.442c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 310.962c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 315.053c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 330.573c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042c0 1.681 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 334.664c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 350.184c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 354.276c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.681-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 369.796c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 373.886c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 389.407c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 393.498c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 409.018c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 413.109c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 428.629c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 432.72c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 448.24c1.68 0 3.042-1.362 3.042-3.042s-1.362-3.041-3.042-3.041-3.042 1.362-3.042 3.041c0 1.68 1.362 3.042 3.042 3.042z" />
            <path d="m461.226 452.331c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m471.4 481.379c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c0-1.681-1.361-3.042-3.042-3.042z" />
            <path d="m461.226 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m451.789 442.156c-1.68 0-3.042 1.362-3.042 3.041 0 1.68 1.362 3.042 3.042 3.042s3.042-1.362 3.042-3.042c0-1.679-1.362-3.041-3.042-3.041z" />
            <path d="m441.615 452.331c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <circle cx="451.789" cy="464.809" r="3.042" />
            <path d="m441.615 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <circle cx="432.178" cy="464.809" r="3.042" />
            <path d="m422.003 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.361-3.042-3.042-3.042z" />
            <circle cx="412.567" cy="464.809" r="3.042" />
            <path d="m402.392 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="392.956" cy="464.809" r="3.042" />
            <path d="m382.781 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="373.345" cy="464.809" r="3.042" />
            <path d="m363.17 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m353.734 461.767c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m343.559 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="334.122" cy="464.809" r="3.042" />
            <path d="m323.948 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="314.511" cy="464.809" r="3.042" />
            <path d="m304.337 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m294.9 461.767c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m284.726 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <circle cx="275.289" cy="464.809" r="3.042" />
            <path d="m265.115 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.363-3.042-3.042-3.042z" />
            <circle cx="255.678" cy="464.809" r="3.042" />
            <path d="m245.503 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="236.067" cy="464.809" r="3.042" />
            <path d="m225.892 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="216.456" cy="464.809" r="3.042" />
            <path d="m206.281 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="196.845" cy="464.809" r="3.042" />
            <path d="m186.67 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="177.234" cy="464.809" r="3.042" />
            <path d="m167.059 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="157.622" cy="464.809" r="3.042" />
            <path d="m147.448 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="138.011" cy="464.809" r="3.042" />
            <path d="m127.837 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m118.4 461.767c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m108.226 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.362-3.042-3.042-3.042z" />
            <path d="m98.789 461.767c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m88.615 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042c-.001-1.68-1.363-3.042-3.042-3.042z" />
            <path d="m79.178 461.767c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m69.003 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="59.567" cy="464.809" r="3.042" />
            <path d="m49.392 491.553c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <path d="m29.781 471.942c-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042 3.042-1.362 3.042-3.042-1.362-3.042-3.042-3.042z" />
            <circle cx="39.956" cy="484.421" r="3.042" />
            <circle cx="20.345" cy="464.809" r="3.042" />
            <path d="m458.139 0h-407.562c-27.889 0-50.577 22.689-50.577 50.578v407.561c0 27.889 22.689 50.578 50.578 50.578h407.561c27.889 0 50.578-22.689 50.578-50.578v-407.561c0-27.889-22.69-50.578-50.578-50.578zm24.972 492.593c-.558-.633-1.365-1.04-2.274-1.04-1.68 0-3.042 1.362-3.042 3.042 0 .416.085.812.236 1.173-5.941 3.154-12.71 4.948-19.892 4.948h-407.561c-6.606 0-12.865-1.512-18.45-4.208.428-.524.695-1.184.695-1.913 0-1.68-1.362-3.042-3.042-3.042-1.305 0-2.408.825-2.84 1.979-2.648-1.774-5.08-3.842-7.264-6.149.216.049.438.079.668.079 1.68 0 3.042-1.362 3.042-3.042s-1.362-3.042-3.042-3.042-3.042 1.362-3.042 3.042c0 .093.019.18.027.271-1.896-2.369-3.544-4.941-4.905-7.682.484-.539.787-1.244.787-2.025 0-1.631-1.286-2.95-2.898-3.027-1.492-4.337-2.314-8.982-2.314-13.818v-407.561c0-23.478 19.1-42.578 42.577-42.578h407.562c20.06 0 36.913 13.948 41.398 32.652-1.232.389-2.131 1.527-2.131 2.888 0 1.68 1.362 3.042 3.042 3.042.026 0 .049-.007.075-.008.124 1.319.194 2.653.194 4.004v9.558c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.581c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.581c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.581c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.581c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.581c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.041 3.042 3.041c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.581c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.581c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.582c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.092 0 .179-.019.269-.027v13.581c-.09-.008-.177-.027-.269-.027-1.68 0-3.042 1.362-3.042 3.042s1.362 3.042 3.042 3.042c.09 0 .174-.019.262-.026-.03 5.247-1.018 10.269-2.792 14.907-.23.345-.386.74-.46 1.164-1.154 2.77-2.594 5.39-4.281 7.829-.552-.561-1.318-.91-2.167-.91-1.68 0-3.042 1.362-3.042 3.042 0 1.09.578 2.039 1.44 2.576-1.907 2.057-4.017 3.93-6.297 5.587z" />
          </g>
          <path d="m238.334 334.546 4.05 10.732c.604 1.602 2.126 2.589 3.743 2.589.469 0 .946-.083 1.411-.259 2.067-.78 3.11-3.088 2.33-5.154l-20.185-53.485c-.014-.038-.028-.075-.044-.112-.811-1.968-2.708-3.238-4.836-3.238-.002 0-.005 0-.007 0-2.13.003-4.027 1.279-4.869 3.34l-20.369 53.483c-.786 2.065.25 4.375 2.314 5.162 2.066.787 4.375-.251 5.162-2.314l4.092-10.744zm-13.542-35.883 10.523 27.883h-21.141z" />
          <path d="m327.13 289.802c-.473-2.324-2.457-4.041-4.825-4.175-2.385-.14-4.534 1.348-5.266 3.604-.015.046-.029.092-.042.138l-12.345 43.307-12.79-43.351c-.015-.048-.029-.095-.045-.142-.756-2.248-2.923-3.705-5.304-3.549-2.366.159-4.333 1.896-4.79 4.272l-9.534 52.827c-.393 2.174 1.052 4.254 3.227 4.647 2.169.391 4.253-1.052 4.647-3.226l7.452-41.292 12.185 41.301c.015.047.029.095.045.142.717 2.133 2.705 3.561 4.953 3.561h.025c2.259-.011 4.246-1.462 4.944-3.61.016-.046.029-.093.043-.14l11.767-41.278 7.904 41.356c.415 2.169 2.509 3.597 4.68 3.178 2.17-.414 3.593-2.51 3.178-4.68z" />
          <path d="m385.958 339.618h-18.648v-18.876h16.979c2.209 0 4-1.791 4-4s-1.791-4-4-4h-16.979v-18.876h18.648c2.209 0 4-1.791 4-4s-1.791-4-4-4h-22.648c-2.209 0-4 1.791-4 4v53.752c0 2.209 1.791 4 4 4h22.648c2.209 0 4-1.791 4-4s-1.791-4-4-4z" />
          <path d="m149.882 347.866c16.142 0 27.415-12.798 27.415-31.124 0-2.209-1.791-4-4-4h-16.229c-2.209 0-4 1.791-4 4s1.791 4 4 4h11.989c-1.155 9.549-6.612 19.124-19.176 19.124-12.75 0-23.123-10.373-23.123-23.124 0-12.75 10.373-23.123 23.123-23.123 4.635 0 9.104 1.365 12.926 3.946 1.831 1.237 4.316.755 5.554-1.075 1.236-1.831.756-4.317-1.075-5.554-5.148-3.478-11.167-5.317-17.404-5.317-17.161 0-31.123 13.962-31.123 31.123 0 17.162 13.962 31.124 31.123 31.124z" />
          <path d="m316.428 382.325c2.209 0 4-1.791 4-4s-1.791-4-4-4h-23.438c-2.209 0-4 1.791-4 4v55.624c0 2.209 1.791 4 4 4h23.438c2.209 0 4-1.791 4-4s-1.791-4-4-4h-19.438v-19.812h17.709c2.209 0 4-1.791 4-4s-1.791-4-4-4h-17.709v-19.812z" />
          <path d="m259.251 374.376c-2.091-.696-4.359.438-5.057 2.535l-15.789 47.529-16.551-47.683c-.725-2.086-3.004-3.192-5.091-2.467s-3.191 3.003-2.468 5.09l19.202 55.321c.746 2.1 2.737 3.504 4.963 3.504.013 0 .024-.001.036-.001 2.24-.015 4.23-1.45 4.96-3.598l18.329-55.174c.697-2.095-.437-4.36-2.534-5.056z" />
          <path d="m385.778 392.658c0-10.25-8.71-18.589-19.415-18.589h-14.917c-.003 0-.006.001-.009.001s-.006-.001-.009-.001c-2.209 0-4 1.791-4 4v56.136c0 2.209 1.791 4 4 4s4-1.791 4-4v-22.915c.275-.002.557-.003.849-.004l22.499 25.562c.791.898 1.895 1.357 3.005 1.357.938 0 1.881-.329 2.641-.997 1.658-1.46 1.819-3.987.36-5.645l-17.902-20.34c10.464-.266 18.898-8.482 18.898-18.565zm-19.415 10.589c-2.495 0-7.358.023-10.837.042-.02-3.434-.043-8.202-.043-10.631 0-2.034-.014-7.011-.024-10.589h10.904c6.188 0 11.415 4.849 11.415 10.589s-5.227 10.589-11.415 10.589z" />
          <path d="m155.007 374.069c-17.683 0-32.068 14.386-32.068 32.068 0 17.683 14.386 32.068 32.068 32.068s32.068-14.386 32.068-32.068-14.386-32.068-32.068-32.068zm0 56.136c-13.271 0-24.068-10.797-24.068-24.068s10.797-24.068 24.068-24.068 24.068 10.797 24.068 24.068-10.797 24.068-24.068 24.068z" />
          <path d="m297.281 57.478h-85.846c-25.859 0-46.897 21.038-46.897 46.897v75.356c0 22.605 16.077 41.525 37.397 45.929v15.189c0 10.67 8.681 19.35 19.351 19.35h66.145c10.669 0 19.35-8.68 19.35-19.35v-15.189c21.321-4.403 37.398-23.323 37.398-45.929v-75.356c0-25.859-21.038-46.897-46.898-46.897zm-87.345 183.37v-14.258c.499.016.997.038 1.5.038h15.008v25.571h-5.157c-6.26-.001-11.351-5.092-11.351-11.351zm40.422-14.22v25.571h-15.915v-25.571zm25.283 0v25.571h-17.282v-25.571zm23.139 14.22c0 6.258-5.092 11.35-11.35 11.35h-3.79v-25.571h13.641c.503 0 1-.023 1.499-.038zm37.399-61.117c0 21.448-17.449 38.897-38.898 38.897h-85.846c-21.448 0-38.897-17.449-38.897-38.897v-75.356c0-21.448 17.449-38.897 38.897-38.897h85.846c21.448 0 38.898 17.449 38.898 38.897z" />
          <path d="m227.541 118.703h-20.008c-8.704 0-15.785 7.082-15.785 15.786v20.008c0 8.704 7.081 15.786 15.785 15.786h20.008c8.704 0 15.786-7.082 15.786-15.786v-20.008c0-8.704-7.082-15.786-15.786-15.786z" />
          <path d="m304.485 118.703h-20.008c-8.704 0-15.785 7.082-15.785 15.786v20.008c0 8.704 7.081 15.786 15.785 15.786h20.008c8.704 0 15.786-7.082 15.786-15.786v-20.008c.001-8.704-7.082-15.786-15.786-15.786z" />
          <path d="m250.177 191.907c0 3.304-2.678 5.982-5.982 5.982s-5.982-2.678-5.982-5.982 2.678-5.982 5.982-5.982 5.982 2.678 5.982 5.982z" />
          <path d="m270.504 191.907c0 3.304-2.678 5.982-5.982 5.982s-5.982-2.678-5.982-5.982 2.678-5.982 5.982-5.982c3.303 0 5.982 2.678 5.982 5.982z" />
        </g>
      </g>
    </svg>
  </div>
  )
}